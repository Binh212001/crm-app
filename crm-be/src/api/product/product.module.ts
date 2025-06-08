import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "./product.entity";
import { ProductVariant } from "./product-variant.entity";
import { ProductController } from "./product.controller";
import { ProductService } from "./services/product.service";
import { ProductRepository } from "./product.repository";

@Module({
  imports: [TypeOrmModule.forFeature([Product, ProductVariant])],
  controllers: [ProductController],
  providers: [ProductService, ProductRepository],
  exports: [ProductService],
})
export class ProductModule {}
