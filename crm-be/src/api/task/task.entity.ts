import { AbstractEntity } from "@/database/entities/abstract.entity";
import {
  Entity,
  Column,
  PrimaryColumn,
  ManyToOne,
  Relation,
  ManyToMany,
} from "typeorm";
import { v7 } from "uuid";
import { Lead } from "../lead/lead.entity";
import { Employee } from "../employee/employee.entity";
import { Tag } from "../tag/tag.entity";

export enum TaskPriority {
  LOW = "LOW",
  MEDIUM = "MEDIUM",
  HIGH = "HIGH",
}

export enum TaskStatus {
  TODO = "TODO",
  IN_PROGRESS = "IN_PROGRESS",
  DONE = "DONE",
  CANCELLED = "CANCELLED",
}

@Entity("tasks")
export class Task extends AbstractEntity {
  constructor(data?: Partial<Task>) {
    super();
    this.id = v7();
    Object.assign(this, data);
  }

  @PrimaryColumn()
  id: string;

  @Column()
  title: string;

  @Column({ type: "text", nullable: true })
  description: string;

  @Column({
    type: "enum",
    enum: TaskPriority,
    default: TaskPriority.MEDIUM,
  })
  priority: TaskPriority;

  @Column({
    type: "enum",
    enum: TaskStatus,
    default: TaskStatus.TODO,
  })
  status: TaskStatus;

  @Column({ type: "timestamp" })
  dueDate: Date;

  @ManyToOne(() => Lead, (lead) => lead.tasks)
  lead: Relation<Lead>;

  @ManyToOne(() => Employee)
  assignedTo: Relation<Employee>;

  @Column({ type: "timestamp", nullable: true })
  completedAt: Date;

  @Column({ type: "jsonb", nullable: true })
  metadata: Record<string, any>;

  @ManyToMany(() => Tag, (tag) => tag.tasks)
  tags: Relation<Tag[]>;
}
