import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import {
  Lead,
  LeadRegion,
  LeadProduct,
  LeadInteractionLevel,
} from "../lead.entity";
import { LeadRepository } from "../lead.repository";
import { EmployeeService } from "../../employee/services/employee.service";
import { CreateLeadDto } from "../dto/create-lead.dto";
import { UpdateLeadDto } from "../dto/update-lead.dto";
import { AssignLeadDto } from "../dto/assign-lead.dto";
import { MergeLeadDto } from "../dto/merge-lead.dto";
import { EmployeeRepository } from "@/api/employee/employee.repository";
import { ListLeadReqDto } from "../dto/list-lead-req.dto";
import { paginate } from "@/utils/offset-pagination";
import { OffsetPaginatedDto } from "@/common/dto/offset-pagination/paginated.dto";
import { plainToInstance } from "class-transformer";
import { LeadResDto } from "../dto/lead-res.dto";
import { BaseService } from "@/api/base/base.service";
import { LeadMergeHistory } from "../lead-merge-history.entity";
import { LeadMergeHistoryRepository } from "../lead-merge-history.repository";
import { leadStatus } from "@/database/seeds/employee-department-team.seed";

@Injectable()
export class LeadService extends BaseService<
  Lead,
  LeadResDto,
  CreateLeadDto,
  UpdateLeadDto
> {
  constructor(
    private readonly leadRepository: LeadRepository,
    private readonly employeeRepository: EmployeeRepository,
    private readonly mergeHistoryRepository: LeadMergeHistoryRepository
  ) {
    super(leadRepository);
  }

  async create(createLeadDto: CreateLeadDto): Promise<Lead> {
    if (createLeadDto.autoClassify) {
      createLeadDto.region = this.classifyRegion(
        createLeadDto.phone,
        createLeadDto.address
      );
      createLeadDto.product = this.classifyProduct(
        createLeadDto.metadata?.message
      );
      createLeadDto.interactionLevel = this.classifyInteractionLevel(
        createLeadDto.metadata
      );
    }

    const lead = this.leadRepository.create(createLeadDto);
    return this.leadRepository.save(lead);
  }

  async findMany(dto: ListLeadReqDto): Promise<OffsetPaginatedDto<LeadResDto>> {
    const { q, source, region, product, tags, assignedTo } = dto;
    const query = this.leadRepository
      .createQueryBuilder("lead")
      .leftJoinAndSelect("lead.assignedTo", "assignedTo");

    if (q) {
      query.andWhere(
        "(lead.firstName ILIKE :q OR lead.lastName ILIKE :q OR lead.email ILIKE :q OR lead.phone ILIKE :q)",
        { q: `%${q}%` }
      );
    }

    if (source) {
      query.andWhere("lead.source = :source", { source });
    }

    if (region) {
      query.andWhere("lead.region = :region", { region });
    }

    if (product) {
      query.andWhere("lead.product = :product", { product });
    }

    if (tags?.length) {
      query.andWhere("lead.tags @> :tags", { tags });
    }

    if (assignedTo) {
      query.andWhere("lead.assignedTo = :assignedTo", { assignedTo });
    }

    const [base, metaDto] = await paginate<Lead>(query, dto, {
      skipCount: false,
      takeAll: false,
    });

    return new OffsetPaginatedDto(plainToInstance(LeadResDto, base), metaDto);
  }

  async findOne(id: string): Promise<Lead> {
    const lead = await this.leadRepository.findOne({
      where: { id },
      relations: ["assignedTo"],
    });

    if (!lead) {
      throw new NotFoundException(`Lead with ID ${id} not found`);
    }

    return lead;
  }

  async updateALead(id: string, updateLeadDto: UpdateLeadDto): Promise<Lead> {
    const lead = await this.findOne(id);
    Object.assign(lead, updateLeadDto);
    return this.leadRepository.save(lead);
  }

  async assign(id: string, assignLeadDto: AssignLeadDto): Promise<Lead> {
    const lead = await this.findOne(id);
    const employee = await this.employeeRepository.findOneBy({
      id: assignLeadDto.employeeId,
    });

    if (!employee) {
      throw new NotFoundException(
        `Employee with ID ${assignLeadDto.employeeId} not found`
      );
    }

    lead.assignedTo = employee;
    lead.assignedAt = new Date();
    lead.status = leadStatus;
    return this.leadRepository.save(lead);
  }

  async merge(mergeLeadDto: MergeLeadDto, employeeId: string): Promise<Lead> {
    const primaryLead = await this.findOne(mergeLeadDto.primaryLeadId);
    const secondaryLead = await this.findOne(mergeLeadDto.secondaryLeadId);
    const employee = await this.employeeRepository.findOneBy({
      id: employeeId,
    });

    if (!employee) {
      throw new NotFoundException(`Employee with ID ${employeeId} not found`);
    }

    if (secondaryLead.isMerged) {
      throw new BadRequestException("Secondary lead has already been merged");
    }

    const mergedData = {
      email:
        secondaryLead.email && !primaryLead.email
          ? secondaryLead.email
          : undefined,
      address:
        secondaryLead.address && !primaryLead.address
          ? secondaryLead.address
          : undefined,
      tags: secondaryLead.tags?.length ? secondaryLead.tags : undefined,
      notes: secondaryLead.notes ? secondaryLead.notes : undefined,
    };

    if (mergedData.email) {
      primaryLead.email = mergedData.email;
    }
    if (mergedData.address) {
      primaryLead.address = mergedData.address;
    }
    if (mergedData.tags?.length) {
      primaryLead.tags = [
        ...new Set([...(primaryLead.tags || []), ...mergedData.tags]),
      ];
    }
    if (mergedData.notes) {
      primaryLead.notes = primaryLead.notes
        ? `${primaryLead.notes}\n---\n${mergedData.notes}`
        : mergedData.notes;
    }

    secondaryLead.isMerged = true;
    secondaryLead.mergedFromId = primaryLead.id;
    secondaryLead.mergedAt = new Date();

    const mergeHistory = new LeadMergeHistory({
      primaryLead,
      secondaryLead,
      mergedData,
      mergedBy: employee,
      mergedAt: new Date(),
    });

    await this.mergeHistoryRepository.save(mergeHistory);
    await this.leadRepository.save(secondaryLead);
    return this.leadRepository.save(primaryLead);
  }

  async undoMerge(mergeHistoryId: string, employeeId: string): Promise<Lead> {
    const mergeHistory = await this.mergeHistoryRepository.findOne({
      where: { id: mergeHistoryId },
      relations: ["primaryLead", "secondaryLead", "mergedBy"],
    });

    if (!mergeHistory) {
      throw new NotFoundException("Merge history not found");
    }

    if (mergeHistory.isUndone) {
      throw new BadRequestException("This merge has already been undone");
    }

    const employee = await this.employeeRepository.findOneBy({
      id: employeeId,
    });

    if (!employee) {
      throw new NotFoundException(`Employee with ID ${employeeId} not found`);
    }

    const primaryLead = mergeHistory.primaryLead;
    const secondaryLead = mergeHistory.secondaryLead;

    secondaryLead.isMerged = false;
    secondaryLead.mergedFromId = null;
    secondaryLead.mergedAt = null;

    if (mergeHistory.mergedData.email) {
      primaryLead.email = null;
    }
    if (mergeHistory.mergedData.address) {
      primaryLead.address = null;
    }
    if (mergeHistory.mergedData.tags?.length) {
      primaryLead.tags = primaryLead.tags?.filter(
        (tag) => !mergeHistory.mergedData.tags.includes(tag)
      );
    }
    if (mergeHistory.mergedData.notes) {
      primaryLead.notes = primaryLead.notes?.replace(
        `\n---\n${mergeHistory.mergedData.notes}`,
        ""
      );
    }

    mergeHistory.isUndone = true;
    mergeHistory.undoneAt = new Date();
    mergeHistory.undoneBy = employee;

    await this.mergeHistoryRepository.save(mergeHistory);
    await this.leadRepository.save(secondaryLead);
    return this.leadRepository.save(primaryLead);
  }

  async getMergeHistory(leadId: string): Promise<LeadMergeHistory[]> {
    return this.mergeHistoryRepository.findByLeadId(leadId);
  }

  async getUndoableMerges(leadId: string): Promise<LeadMergeHistory[]> {
    return this.mergeHistoryRepository.findUndoableMerges(leadId);
  }

  private classifyRegion(phone: string, address?: string): LeadRegion {
    // Implement region classification logic based on phone prefix or address
    // This is a simplified example
    if (phone.startsWith("024") || phone.startsWith("028")) {
      return LeadRegion.HANOI;
    }
    if (phone.startsWith("028")) {
      return LeadRegion.HCM;
    }
    return LeadRegion.NORTH;
  }

  private classifyProduct(message?: string): LeadProduct {
    // Implement product classification logic based on message content
    // This is a simplified example
    if (!message) return null;

    if (message.toLowerCase().includes("product a")) {
      return LeadProduct.PRODUCT_A;
    }
    if (message.toLowerCase().includes("service b")) {
      return LeadProduct.SERVICE_B;
    }
    if (message.toLowerCase().includes("consult")) {
      return LeadProduct.CONSULTING;
    }
    return null;
  }

  private classifyInteractionLevel(
    metadata?: Record<string, any>
  ): LeadInteractionLevel {
    // Implement interaction level classification logic
    // This is a simplified example
    if (metadata?.formSubmitted || metadata?.messageReplied) {
      return LeadInteractionLevel.HIGH;
    }
    return LeadInteractionLevel.LOW;
  }
}
