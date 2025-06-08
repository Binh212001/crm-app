import { StringField } from "@/decorators/field.decorators";
import { IsDate, IsEnum, IsOptional, IsString, IsUUID } from "class-validator";
import { TaskPriority, TaskStatus } from "../task.entity";

export class CreateTaskDto {
  @StringField()
  title: string;

  @StringField({ required: false })
  description?: string;

  @IsEnum(TaskPriority)
  priority: TaskPriority;

  @IsEnum(TaskStatus)
  status: TaskStatus;

  @IsDate()
  dueDate: Date;

  @IsUUID()
  leadId: string;

  @IsUUID()
  assignedToId: string;

  @IsOptional()
  @IsString()
  metadata?: Record<string, any>;
}
