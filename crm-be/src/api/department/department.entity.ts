import { AbstractEntity } from "@/database/entities/abstract.entity";
import { Entity, Column, PrimaryColumn, OneToMany, Relation } from "typeorm";
import { Team } from "../team/team.entity";
import { v7 } from "uuid";

@Entity("departments")
export class Department extends AbstractEntity {
  constructor(data?: Partial<Department>) {
    super();
    this.id = v7();
    Object.assign(this, data);
  }

  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @OneToMany(() => Team, (team) => team.department)
  teams: Relation<Team[]>;
}
