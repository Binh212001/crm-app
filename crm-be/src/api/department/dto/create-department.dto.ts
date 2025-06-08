import {
  StringField,
  StringFieldOptional,
} from "@/decorators/field.decorators";

export class CreateDepartmentDto {
  @StringField()
  name: string;

  @StringFieldOptional()
  description?: string;
}
