import { StringField } from "@/decorators/field.decorators";
import { IsOptional, IsString } from "class-validator";

export class UpdateLeadStatusDto {
  @StringField()
  name?: string;
}
