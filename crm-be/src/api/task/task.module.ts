import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Task } from "./task.entity";
import { TaskController } from "./task.controller";
import { TaskService } from "./services/task.service";
import { TaskRepository } from "./task.repository";
import { LeadModule } from "../lead/lead.module";
import { EmployeeModule } from "../employee/employee.module";

@Module({
  imports: [LeadModule, EmployeeModule],
  controllers: [TaskController],
  providers: [TaskService, TaskRepository],
  exports: [TaskService],
})
export class TaskModule {}
