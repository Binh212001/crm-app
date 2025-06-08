import {
  StringField,
  StringFieldOptional,
  UUIDFieldOptional,
} from "@/decorators/field.decorators";

export class UpdateTeamDto {
  @StringFieldOptional()
  name?: string;

  @StringFieldOptional()
  description?: string;

  @UUIDFieldOptional()
  departmentId?: string;
}
