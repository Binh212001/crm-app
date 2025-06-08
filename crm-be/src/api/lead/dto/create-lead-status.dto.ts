import { StringField } from "@/decorators/field.decorators";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateLeadStatusDto {
  @StringField()
  name: string;
}
