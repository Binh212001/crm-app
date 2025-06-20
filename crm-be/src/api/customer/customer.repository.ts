import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { Customer } from "./customer.entity";

@Injectable()
export class CustomerRepository extends Repository<Customer> {
  constructor(private dataSource: DataSource) {
    super(Customer, dataSource.createEntityManager());
  }
}
