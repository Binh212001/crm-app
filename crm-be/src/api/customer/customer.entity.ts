import { AbstractEntity } from "@/database/entities/abstract.entity";
import { Entity, Column, PrimaryColumn, ManyToMany, Relation } from "typeorm";
import { v7 } from "uuid";
import { Tag } from "../tag/tag.entity";

@Entity("customers")
export class Customer extends AbstractEntity {
  constructor(data?: Partial<Customer>) {
    super();
    this.id = v7();
    Object.assign(this, data);
  }

  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  address: string;

  @Column({ type: "text", nullable: true })
  notes: string;

  @ManyToMany(() => Tag, (tag) => tag.customers)
  tags: Relation<Tag[]>;
}
