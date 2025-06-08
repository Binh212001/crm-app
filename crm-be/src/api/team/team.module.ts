import { Module } from "@nestjs/common";
import { TeamService } from "./services/team.service";
import { TeamController } from "./team.controller";
import { TeamRepository } from "./team.reposiroty";
import { DepartmentRepository } from "@/api/department/department.repository";

@Module({
  controllers: [TeamController],
  providers: [TeamService, TeamRepository, DepartmentRepository],
  exports: [TeamService],
})
export class TeamModule {}
