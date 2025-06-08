import { StringField } from "@/decorators/field.decorators";

export class UpdateTagDto {
  @StringField({ required: false })
  name?: string;

  @StringField({ required: false })
  color?: string;

  @StringField({ required: false })
  description?: string;
}
