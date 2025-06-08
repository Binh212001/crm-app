import {
  StringField,
  StringFieldOptional,
} from "@/decorators/field.decorators";

export class UpdateDepartmentDto {
  @StringFieldOptional()
  name?: string;

  @StringFieldOptional()
  description?: string;
}
