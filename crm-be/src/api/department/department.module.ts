import { Module } from "@nestjs/common";
import { DepartmentService } from "./services/department.service";
import { DepartmentController } from "./department.controller";
import { DepartmentRepository } from "./department.repository";

@Module({
  controllers: [DepartmentController],
  providers: [DepartmentService, DepartmentRepository],
  exports: [DepartmentService],
})
export class DepartmentModule {}
