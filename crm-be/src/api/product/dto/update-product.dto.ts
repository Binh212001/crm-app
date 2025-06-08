import {
  StringFieldOptional,
  NumberFieldOptional,
  EnumFieldOptional,
} from "@/decorators/field.decorators";
import { ProductType, ProductStatus } from "../product.entity";

export class UpdateProductDto {
  @StringFieldOptional()
  name?: string;

  @StringFieldOptional()
  description?: string;

  @EnumFieldOptional(() => ProductType)
  type?: ProductType;

  @EnumFieldOptional(() => ProductStatus)
  status?: ProductStatus;

  @NumberFieldOptional()
  basePrice?: number;

  @StringFieldOptional({})
  metadata?: Record<string, any>;
}
