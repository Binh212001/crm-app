import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from "@nestjs/common";
import { CustomerRepository } from "../customer.repository";
import { CreateCustomerDto } from "../dto/create-customer.dto";
import { UpdateCustomerDto } from "../dto/update-customer.dto";
import { Customer } from "../customer.entity";
import { paginate } from "@/utils/offset-pagination";
import { OffsetPaginatedDto } from "@/common/dto/offset-pagination/paginated.dto";
import { ListCustomerReq } from "../dto/list-customer-req.dto";
import { LeadService } from "@/api/lead/services/lead.service";
import { LeadToCustomerDto } from "../dto/lead-to-customer.dto";

@Injectable()
export class CustomerService {
  constructor(
    private readonly customerRepository: CustomerRepository,
    private readonly leadService: LeadService
  ) {}

  async create(createDto: CreateCustomerDto): Promise<Customer> {
    const customer = this.customerRepository.create(createDto);
    return this.customerRepository.save(customer);
  }

  async findMany(dto: ListCustomerReq): Promise<OffsetPaginatedDto<Customer>> {
    const { name, email, phone } = dto;
    const query = this.customerRepository
      .createQueryBuilder("customer")
      .leftJoinAndSelect("customer.tags", "tags");

    if (name) {
      query.andWhere("customer.name ILIKE :name", { name: `%${name}%` });
    }

    if (email) {
      query.andWhere("customer.email ILIKE :email", { email: `%${email}%` });
    }

    if (phone) {
      query.andWhere("customer.phone ILIKE :phone", { phone: `%${phone}%` });
    }

    const [base, metaDto] = await paginate<Customer>(query, dto, {
      skipCount: false,
      takeAll: false,
    });

    return new OffsetPaginatedDto(base, metaDto);
  }

  async findOne(id: string): Promise<Customer> {
    const customer = await this.customerRepository.findOne({
      where: { id },
      relations: ["tags"],
    });

    if (!customer) {
      throw new NotFoundException(`Customer with ID ${id} not found`);
    }

    return customer;
  }

  async update(id: string, updateDto: UpdateCustomerDto): Promise<Customer> {
    const customer = await this.findOne(id);
    Object.assign(customer, updateDto);
    return this.customerRepository.save(customer);
  }

  async remove(id: string): Promise<void> {
    const customer = await this.findOne(id);
    await this.customerRepository.remove(customer);
  }

  async convertFromLead(dto: LeadToCustomerDto): Promise<Customer> {
    const lead = await this.leadService.findOne(dto.leadId);

    if (!lead) {
      throw new NotFoundException(`Lead with ID ${dto.leadId} not found`);
    }

    // Check if customer already exists with this lead's information
    const existingCustomer = await this.customerRepository.findOne({
      where: [{ email: lead.email }, { phone: lead.phone }],
    });

    if (existingCustomer) {
      throw new BadRequestException(
        "A customer already exists with this email or phone number"
      );
    }

    // Create customer from lead data
    const customerData: CreateCustomerDto = {
      name: `${lead.firstName} ${lead.lastName}`.trim(),
      email: lead.email,
      phone: lead.phone,
      address: lead.address,
      notes: dto.notes || `Converted from lead ${lead.id}`,
    };

    const customer = this.customerRepository.create(customerData);
    return this.customerRepository.save(customer);
  }
}
