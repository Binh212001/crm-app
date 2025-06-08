import { AbstractEntity } from "@/database/entities/abstract.entity";
import {
  Entity,
  Column,
  PrimaryColumn,
  ManyToOne,
  OneToMany,
  Relation,
} from "typeorm";
import { Department } from "../department/department.entity";
import { Employee } from "../employee/employee.entity";
import { v7 } from "uuid";

@Entity("teams")
export class Team extends AbstractEntity {
  constructor(data?: Partial<Team>) {
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

  @ManyToOne(() => Department, (department) => department.teams)
  department: Relation<Department>;

  @OneToMany(() => Employee, (employee) => employee.team)
  employees: Relation<Employee[]>;
}
