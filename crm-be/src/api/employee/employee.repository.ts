import { Injectable } from "@nestjs/common";
import { DataSource } from "typeorm";
import { Employee } from "./employee.entity";
import { BaseRepository } from "../base/base.repository";

@Injectable()
export class EmployeeRepository extends BaseRepository<Employee> {
  constructor(private readonly dataSource: DataSource) {
    super(Employee, dataSource.createEntityManager());
  }
}
