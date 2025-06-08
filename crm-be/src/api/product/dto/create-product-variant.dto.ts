import { StringField, NumberField } from "@/decorators/field.decorators";

export class CreateProductVariantDto {
  @StringField()
  name: string;

  @StringField({ nullable: true })
  sku: string;

  @NumberField()
  price: number;

  @NumberField({ nullable: true, default: 0 })
  stock: number;

  @StringField({ nullable: true })
  attributes: Record<string, any>;

  @StringField({ nullable: true })
  metadata: Record<string, any>;
}
