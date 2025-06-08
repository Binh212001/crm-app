import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from "@nestjs/common";
import { ProductService } from "./services/product.service";
import { CreateProductDto } from "./dto/create-product.dto";
import { ListProductReqDto } from "./dto/list-product-req.dto";
import { OffsetPaginatedDto } from "@/common/dto/offset-pagination/paginated.dto";
import { ApiAuth } from "@/decorators/http.decorators";
import { ProductVariant } from "./product-variant.entity";
import { ProductResDto } from "./dto/product.res.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { CreateProductVariantDto } from "./dto/create-product-variant.dto";

@Controller("products")
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @ApiAuth({
    type: CreateProductDto,
    description: "Create a new product",
  })
  @Post()
  create(@Body() createDto: CreateProductDto): Promise<ProductResDto> {
    return this.productService.create(createDto);
  }

  @ApiAuth({
    type: ListProductReqDto,
    description: "Get all products with pagination",
  })
  @Get()
  findAll(
    @Query() dto: ListProductReqDto
  ): Promise<OffsetPaginatedDto<ProductResDto>> {
    return this.productService.findMany(dto);
  }

  @ApiAuth({
    type: String,
    description: "Get product by ID",
  })
  @Get(":id")
  findOne(@Param("id") id: string): Promise<ProductResDto> {
    return this.productService.findOne(id);
  }

  @ApiAuth({
    type: UpdateProductDto,
    description: "Update product by ID",
  })
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateDto: UpdateProductDto
  ): Promise<ProductResDto> {
    return this.productService.update(id, updateDto);
  }

  @ApiAuth({
    type: String,
    description: "Delete product by ID",
  })
  @Delete(":id")
  remove(@Param("id") id: string): Promise<void> {
    return this.productService.remove(id);
  }

  @ApiAuth({
    type: CreateProductVariantDto,
    description: "Add variant to product",
  })
  @Post(":id/variants")
  addVariant(
    @Param("id") id: string,
    @Body() variantDto: CreateProductVariantDto
  ): Promise<ProductVariant> {
    return this.productService.addVariant(id, variantDto);
  }

  @ApiAuth({
    type: CreateProductVariantDto,
    description: "Update product variant",
  })
  @Patch(":productId/variants/:variantId")
  updateVariant(
    @Param("productId") productId: string,
    @Param("variantId") variantId: string,
    @Body() variantDto: Partial<CreateProductVariantDto>
  ): Promise<ProductVariant> {
    return this.productService.updateVariant(productId, variantId, variantDto);
  }

  @ApiAuth({
    type: String,
    description: "Remove variant from product",
  })
  @Delete(":productId/variants/:variantId")
  removeVariant(
    @Param("productId") productId: string,
    @Param("variantId") variantId: string
  ): Promise<void> {
    return this.productService.removeVariant(productId, variantId);
  }
}
