import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { LeadStatus } from "./lead-status.entity";

@Injectable()
export class LeadStatusRepository extends Repository<LeadStatus> {
  constructor(private dataSource: DataSource) {
    super(LeadStatus, dataSource.createEntityManager());
  }
}
