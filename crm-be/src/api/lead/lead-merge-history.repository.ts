import { Injectable } from "@nestjs/common";
import { DataSource } from "typeorm";
import { LeadMergeHistory } from "./lead-merge-history.entity";
import { BaseRepository } from "../base/base.repository";

@Injectable()
export class LeadMergeHistoryRepository extends BaseRepository<LeadMergeHistory> {
  constructor(private readonly dataSource: DataSource) {
    super(LeadMergeHistory, dataSource.createEntityManager());
  }

  async findByLeadId(leadId: string): Promise<LeadMergeHistory[]> {
    return this.find({
      where: [
        { primaryLead: { id: leadId } },
        { secondaryLead: { id: leadId } },
      ],
      relations: ["primaryLead", "secondaryLead", "mergedBy", "undoneBy"],
      order: { mergedAt: "DESC" },
    });
  }

  async findUndoableMerges(leadId: string): Promise<LeadMergeHistory[]> {
    return this.find({
      where: [
        { primaryLead: { id: leadId }, isUndone: false },
        { secondaryLead: { id: leadId }, isUndone: false },
      ],
      relations: ["primaryLead", "secondaryLead", "mergedBy"],
      order: { mergedAt: "DESC" },
    });
  }
}
