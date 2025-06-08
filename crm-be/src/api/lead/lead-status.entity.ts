import { AbstractEntity } from "@/database/entities/abstract.entity";
import { Entity, Column, PrimaryColumn, OneToMany, Relation } from "typeorm";
import { v7 } from "uuid";
import { Lead } from "./lead.entity";

@Entity("lead_statuses")
export class LeadStatus extends AbstractEntity {
  constructor(data?: Partial<LeadStatus>) {
    super();
    this.id = v7();
    Object.assign(this, data);
  }

  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @OneToMany(() => Lead, (lead) => lead.status)
  leads: Relation<Lead[]>;
}
