import { StringFieldOptional } from "@/decorators/field.decorators";

export class UpdateCustomerDto {
  @StringFieldOptional()
  name?: string;

  @StringFieldOptional()
  email?: string;

  @StringFieldOptional()
  phone?: string;

  @StringFieldOptional()
  address?: string;

  @StringFieldOptional()
  notes?: string;
}
