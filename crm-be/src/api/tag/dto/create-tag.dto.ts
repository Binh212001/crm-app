import { StringField } from "@/decorators/field.decorators";

export class CreateTagDto {
  @StringField()
  name: string;

  @StringField({ required: false })
  color?: string;

  @StringField({ required: false })
  description?: string;
}
