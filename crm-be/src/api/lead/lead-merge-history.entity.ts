import { AbstractEntity } from "@/database/entities/abstract.entity";
import { Entity, Column, PrimaryColumn, ManyToOne, Relation } from "typeorm";
import { v7 } from "uuid";
import { Lead } from "./lead.entity";
import { Employee } from "../employee/employee.entity";

@Entity("lead_merge_histories")
export class LeadMergeHistory extends AbstractEntity {
  constructor(data?: Partial<LeadMergeHistory>) {
    super();
    this.id = v7();
    Object.assign(this, data);
  }

  @PrimaryColumn()
  id: string;

  @ManyToOne(() => Lead)
  primaryLead: Relation<Lead>;

  @ManyToOne(() => Lead)
  secondaryLead: Relation<Lead>;

  @Column({ type: "jsonb", nullable: true })
  mergedData: {
    email?: string;
    address?: string;
    tags?: string[];
    notes?: string;
  };

  @ManyToOne(() => Employee)
  mergedBy: Relation<Employee>;

  @Column({ type: "timestamp" })
  mergedAt: Date;

  @Column({ type: "boolean", default: false })
  isUndone: boolean;

  @Column({ type: "timestamp", nullable: true })
  undoneAt: Date;

  @ManyToOne(() => Employee, { nullable: true })
  undoneBy: Relation<Employee>;
}
