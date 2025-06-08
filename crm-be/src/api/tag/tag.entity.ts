import { AbstractEntity } from "@/database/entities/abstract.entity";
import { Entity, Column, PrimaryColumn, ManyToMany, Relation } from "typeorm";
import { v7 } from "uuid";
import { Lead } from "../lead/lead.entity";
import { Task } from "../task/task.entity";
import { Customer } from "../customer/customer.entity";

@Entity("tags")
export class Tag extends AbstractEntity {
  constructor(data?: Partial<Tag>) {
    super();
    this.id = v7();
    Object.assign(this, data);
  }

  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  color: string;

  @Column({ nullable: true })
  description: string;

  @ManyToMany(() => Lead, (lead) => lead.tags)
  leads: Relation<Lead[]>;

  @ManyToMany(() => Task, (task) => task.tags)
  tasks: Relation<Task[]>;

  @ManyToMany(() => Customer, (customer) => customer.tags)
  customers: Relation<Customer[]>;
}
