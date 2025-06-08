import { StringField } from "@/decorators/field.decorators";
import { IsDate, IsEnum, IsOptional, IsString, IsUUID } from "class-validator";
import { TaskPriority, TaskStatus } from "../task.entity";

export class UpdateTaskDto {
  @StringField({ required: false })
  title?: string;

  @StringField({ required: false })
  description?: string;

  @IsOptional()
  @IsEnum(TaskPriority)
  priority?: TaskPriority;

  @IsOptional()
  @IsEnum(TaskStatus)
  status?: TaskStatus;

  @IsOptional()
  @IsDate()
  dueDate?: Date;

  @IsOptional()
  @IsUUID()
  assignedToId?: string;

  @IsOptional()
  @IsString()
  metadata?: Record<string, any>;
}
