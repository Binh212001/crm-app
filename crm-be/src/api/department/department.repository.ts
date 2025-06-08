import { Injectable } from "@nestjs/common";
import { DataSource } from "typeorm";
import { Department } from "./department.entity";
import { BaseRepository } from "../base/base.repository";

@Injectable()
export class DepartmentRepository extends BaseRepository<Department> {
  constructor(private readonly dataSource: DataSource) {
    super(Department, dataSource.createEntityManager());
  }
}
