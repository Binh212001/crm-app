import {
  StringField,
  StringFieldOptional,
  EmailField,
  UUIDFieldOptional,
  DateField,
  BooleanFieldOptional,
} from "@/decorators/field.decorators";

export class CreateEmployeeDto {
  @StringField()
  firstName: string;

  @StringField()
  lastName: string;

  @EmailField()
  email: string;

  @StringFieldOptional()
  phone?: string;

  @StringFieldOptional()
  position?: string;

  @StringFieldOptional()
  address?: string;

  @DateField()
  dateOfBirth: Date;

  @DateField()
  hireDate: Date;

  @BooleanFieldOptional()
  isActive?: boolean;

  @UUIDFieldOptional()
  teamId?: string;

  @StringFieldOptional()
  avatar?: string;
}
