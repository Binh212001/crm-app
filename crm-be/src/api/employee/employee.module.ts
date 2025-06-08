import { Module } from "@nestjs/common";
import { EmployeeService } from "./services/employee.service";
import { EmployeeController } from "./employee.controller";
import { EmployeeRepository } from "./employee.repository";
import { TeamRepository } from "@/api/team/team.reposiroty";

@Module({
  controllers: [EmployeeController],
  providers: [EmployeeService, EmployeeRepository, TeamRepository],
  exports: [EmployeeService, EmployeeRepository],
})
export class EmployeeModule {}
