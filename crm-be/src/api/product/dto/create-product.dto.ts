import {
  StringField,
  NumberField,
  EnumField,
} from "@/decorators/field.decorators";
import { ProductType, ProductStatus } from "../product.entity";

export class CreateProductDto {
  @StringField()
  name: string;

  @StringField({ required: false })
  description?: string;

  @EnumField(() => ProductType)
  type: ProductType;

  @EnumField(() => ProductStatus, { required: false })
  status?: ProductStatus;

  @NumberField({ required: false })
  basePrice?: number;

  @StringField({ required: false })
  metadata?: Record<string, any>;
}
