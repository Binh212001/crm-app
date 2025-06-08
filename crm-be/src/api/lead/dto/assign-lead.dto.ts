import { StringField } from "@/decorators/field.decorators";
import { IsString, IsNotEmpty } from "class-validator";

export class AssignLeadDto {
  @StringField()
  employeeId: string;
}
