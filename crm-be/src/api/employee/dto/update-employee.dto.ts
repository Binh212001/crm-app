import {
  StringField,
  StringFieldOptional,
  EmailField,
  UUIDFieldOptional,
  DateFieldOptional,
  BooleanFieldOptional,
} from "@/decorators/field.decorators";

export class UpdateEmployeeDto {
  @StringFieldOptional()
  firstName?: string;

  @StringFieldOptional()
  lastName?: string;

  @EmailField()
  @StringFieldOptional()
  email?: string;

  @StringFieldOptional()
  phone?: string;

  @StringFieldOptional()
  position?: string;

  @StringFieldOptional()
  address?: string;

  @DateFieldOptional()
  dateOfBirth?: Date;

  @DateFieldOptional()
  hireDate?: Date;

  @BooleanFieldOptional()
  isActive?: boolean;

  @UUIDFieldOptional()
  teamId?: string;
}
