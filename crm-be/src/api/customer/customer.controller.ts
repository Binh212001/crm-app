import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from "@nestjs/common";
import { CustomerService } from "./services/customer.service";
import { CreateCustomerDto } from "./dto/create-customer.dto";
import { UpdateCustomerDto } from "./dto/update-customer.dto";
import { Customer } from "./customer.entity";
import { ListCustomerReq } from "./dto/list-customer-req.dto";
import { OffsetPaginatedDto } from "@/common/dto/offset-pagination/paginated.dto";
import { LeadToCustomerDto } from "./dto/lead-to-customer.dto";
import { ApiAuth } from "@/decorators/http.decorators";

@Controller("customers")
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @ApiAuth({
    type: CreateCustomerDto,
    description: "Create a new customer",
  })
  @Post()
  create(@Body() createCustomerDto: CreateCustomerDto): Promise<Customer> {
    return this.customerService.create(createCustomerDto);
  }

  @ApiAuth({
    type: ListCustomerReq,
    description: "Get all customers with pagination",
  })
  @Get()
  findAll(
    @Query() dto: ListCustomerReq
  ): Promise<OffsetPaginatedDto<Customer>> {
    return this.customerService.findMany(dto);
  }

  @ApiAuth({
    type: String,
    description: "Get customer by ID",
  })
  @Get(":id")
  findOne(@Param("id") id: string): Promise<Customer> {
    return this.customerService.findOne(id);
  }

  @ApiAuth({
    type: UpdateCustomerDto,
    description: "Update customer by ID",
  })
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateCustomerDto: UpdateCustomerDto
  ): Promise<Customer> {
    return this.customerService.update(id, updateCustomerDto);
  }

  @ApiAuth({
    type: String,
    description: "Delete customer by ID",
  })
  @Delete(":id")
  remove(@Param("id") id: string): Promise<void> {
    return this.customerService.remove(id);
  }

  @ApiAuth({
    type: LeadToCustomerDto,
    description: "Convert a lead to a customer",
  })
  @Post("from-lead")
  convertFromLead(@Body() dto: LeadToCustomerDto): Promise<Customer> {
    return this.customerService.convertFromLead(dto);
  }
}
