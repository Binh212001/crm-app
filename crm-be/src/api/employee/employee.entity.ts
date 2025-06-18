import { AbstractEntity } from "@/database/entities/abstract.entity";
import {
  Entity,
  Column,
  PrimaryColumn,
  ManyToOne,
  OneToMany,
  Relation,
  DeleteDateColumn,
} from "typeorm";
import { v7 } from "uuid";
import { Team } from "../team/team.entity";
import { Lead } from "../lead/lead.entity";

@Entity("employees")
export class Employee extends AbstractEntity {
  constructor(data?: Partial<Employee>) {
    super();
    this.id = v7();
    Object.assign(this, data);
  }
  @PrimaryColumn()
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  position: string;

  @Column({ nullable: true })
  address: string;

  @Column({ type: "date" })
  dateOfBirth: Date;
  @Column({ nullable: true })
  avatar: string;

  @Column({ type: "date" })
  hireDate: Date;

  @Column({ default: true })
  isActive: boolean;

  @ManyToOne(() => Team, (team) => team.employees)
  team: Relation<Team>;

  @OneToMany(() => Lead, (lead) => lead.assignedTo)
  leads: Relation<Lead[]>;
  @DeleteDateColumn()
  deletedAt: Date;
}
