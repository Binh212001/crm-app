import { Exclude, Expose, Type } from "class-transformer";
import { Product } from "../product.entity";
import { ProductVariant } from "../product-variant.entity";

@Exclude()
export class ProductVariantResDto {
  @Expose()
  id: string;

  @Expose()
  name: string;

  @Expose()
  sku: string;

  @Expose()
  price: number;

  @Expose()
  stock: number;

  @Expose()
  attributes: Record<string, any>;

  @Expose()
  metadata: Record<string, any>;

  @Expose()
  createdAt: Date;

  @Expose()
  updatedAt: Date;
}

@Exclude()
export class ProductResDto {
  @Expose()
  id: string;

  @Expose()
  name: string;

  @Expose()
  description: string;

  @Expose()
  type: string;

  @Expose()
  status: string;

  @Expose()
  basePrice: number;

  @Expose()
  metadata: Record<string, any>;

  @Expose()
  @Type(() => ProductVariantResDto)
  variants: ProductVariantResDto[];

  @Expose()
  createdAt: Date;

  @Expose()
  updatedAt: Date;

  constructor(partial: Partial<Product>) {
    Object.assign(this, partial);
  }
}
