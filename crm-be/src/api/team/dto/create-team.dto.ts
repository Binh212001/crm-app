import {
  StringField,
  StringFieldOptional,
  UUIDField,
} from "@/decorators/field.decorators";

export class CreateTeamDto {
  @StringField()
  name: string;

  @StringFieldOptional()
  description?: string;

  @UUIDField()
  departmentId: string;
}
