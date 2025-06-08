import { StringField } from "@/decorators/field.decorators";

export class CreateCustomerDto {
  @StringField()
  name: string;

  @StringField({ required: false })
  email?: string;

  @StringField({ required: false })
  phone?: string;

  @StringField({ required: false })
  address?: string;

  @StringField({ required: false })
  notes?: string;
}
