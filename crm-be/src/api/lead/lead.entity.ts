import { AbstractEntity } from "@/database/entities/abstract.entity";
import {
  Entity,
  Column,
  PrimaryColumn,
  ManyToOne,
  OneToMany,
  Relation,
} from "typeorm";
import { v7 } from "uuid";
import { Employee } from "../employee/employee.entity";
import { LeadStatus } from "./lead-status.entity";
import { Task } from "../task/task.entity";

export enum LeadSource {
  ZALO = "ZALO",
  FACEBOOK = "FACEBOOK",
  MANUAL = "MANUAL",
}

export enum LeadRegion {
  NORTH = "NORTH",
  CENTRAL = "CENTRAL",
  SOUTH = "SOUTH",
  HANOI = "HANOI",
  HCM = "HCM",
}

export enum LeadProduct {
  PRODUCT_A = "PRODUCT_A",
  SERVICE_B = "SERVICE_B",
  CONSULTING = "CONSULTING",
}

export enum LeadInteractionLevel {
  HIGH = "HIGH",
  LOW = "LOW",
}

@Entity("leads")
export class Lead extends AbstractEntity {
  constructor(data?: Partial<Lead>) {
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
  phone: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  address: string;

  @Column({
    type: "enum",
    enum: LeadSource,
    default: LeadSource.MANUAL,
  })
  source: LeadSource;

  @Column({
    type: "enum",
    enum: LeadRegion,
    nullable: true,
  })
  region: LeadRegion;

  @Column({
    type: "enum",
    enum: LeadProduct,
    nullable: true,
  })
  product: LeadProduct;

  @Column({
    type: "enum",
    enum: LeadInteractionLevel,
    default: LeadInteractionLevel.LOW,
  })
  interactionLevel: LeadInteractionLevel;

  @ManyToOne(() => LeadStatus, (status) => status.leads, { nullable: true })
  status: Relation<LeadStatus>;

  @Column("simple-array", { nullable: true })
  tags: string[];

  @Column({ type: "text", nullable: true })
  notes: string;

  @Column({ type: "jsonb", nullable: true })
  metadata: Record<string, any>;

  @ManyToOne(() => Employee, (employee) => employee.leads)
  assignedTo: Relation<Employee>;

  @Column({ type: "timestamp", nullable: true })
  lastContactedAt: Date;

  @Column({ type: "timestamp", nullable: true })
  assignedAt: Date;

  @Column({ type: "boolean", default: false })
  isMerged: boolean;

  @Column({ nullable: true })
  mergedFromId: string;

  @Column({ type: "timestamp", nullable: true })
  mergedAt: Date;

  @OneToMany(() => Task, (task) => task.lead)
  tasks: Relation<Task[]>;
}
