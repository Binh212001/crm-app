import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Customer } from "./customer.entity";
import { CustomerController } from "./customer.controller";
import { CustomerService } from "./services/customer.service";
import { CustomerRepository } from "./customer.repository";
import { LeadModule } from "@/api/lead/lead.module";

@Module({
  imports: [LeadModule],
  controllers: [CustomerController],
  providers: [CustomerService, CustomerRepository],
  exports: [CustomerService],
})
export class CustomerModule {}
