import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Lead } from "./lead.entity";
import { LeadController } from "./lead.controller";
import { LeadService } from "./services/lead.service";
import { LeadRepository } from "./lead.repository";
import { LeadStatus } from "./lead-status.entity";
import { LeadStatusController } from "./lead-status.controller";
import { LeadStatusService } from "./services/lead-status.service";
import { LeadStatusRepository } from "./lead-status.repository";
import { EmployeeModule } from "../employee/employee.module";
import { LeadMergeHistoryRepository } from "./lead-merge-history.repository";

@Module({
  imports: [EmployeeModule],
  controllers: [LeadController, LeadStatusController],
  providers: [
    LeadService,
    LeadRepository,
    LeadStatusService,
    LeadStatusRepository,
    LeadMergeHistoryRepository,
  ],
  exports: [LeadService, LeadStatusService, LeadMergeHistoryRepository],
})
export class LeadModule {}
