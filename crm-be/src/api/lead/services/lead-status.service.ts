import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { LeadStatusRepository } from "../lead-status.repository";
import { CreateLeadStatusDto } from "../dto/create-lead-status.dto";
import { UpdateLeadStatusDto } from "../dto/update-lead-status.dto";
import { LeadStatus } from "../lead-status.entity";

@Injectable()
export class LeadStatusService {
  constructor(private readonly leadStatusRepository: LeadStatusRepository) {}

  async create(createDto: CreateLeadStatusDto): Promise<LeadStatus> {
    const status = this.leadStatusRepository.create(createDto);
    return this.leadStatusRepository.save(status);
  }

  async findAll(): Promise<LeadStatus[]> {
    return this.leadStatusRepository.find();
  }

  async findOne(id: string): Promise<LeadStatus> {
    const status = await this.leadStatusRepository.findOne({ where: { id } });
    if (!status) {
      throw new NotFoundException(`Lead status with ID ${id} not found`);
    }
    return status;
  }

  async update(
    id: string,
    updateDto: UpdateLeadStatusDto
  ): Promise<LeadStatus> {
    const status = await this.findOne(id);
    Object.assign(status, updateDto);
    return this.leadStatusRepository.save(status);
  }

  async remove(id: string): Promise<void> {
    const status = await this.findOne(id);
    await this.leadStatusRepository.remove(status);
  }
}
