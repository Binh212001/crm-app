import { IsEnum, IsOptional, IsUUID } from "class-validator";
import { TaskStatus } from "../task.entity";
import { ListBaseReqDto } from "@/api/base/dto/list-base.req.dto";
import {
  EnumFieldOptional,
  StringFieldOptional,
} from "@/decorators/field.decorators";

export class ListTaskReq extends ListBaseReqDto {
  @EnumFieldOptional(() => TaskStatus)
  status?: TaskStatus;

  @StringFieldOptional()
  employeeId?: string;
}
