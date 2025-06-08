import { Injectable, NotFoundException } from "@nestjs/common";
import { ProductRepository } from "../product.repository";
import { CreateProductDto } from "../dto/create-product.dto";
import { UpdateProductDto } from "../dto/update-product.dto";
import { Product } from "../product.entity";
import { ProductVariant } from "../product-variant.entity";
import { CreateProductVariantDto } from "../dto/create-product-variant.dto";
import { paginate } from "@/utils/offset-pagination";
import { OffsetPaginatedDto } from "@/common/dto/offset-pagination/paginated.dto";
import { ListBaseReqDto } from "@/api/base/dto/list-base.req.dto";
import { ProductResDto } from "../dto/product.res.dto";
import { plainToInstance } from "class-transformer";

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  async create(createDto: CreateProductDto): Promise<ProductResDto> {
    const product = this.productRepository.create(createDto);
    const savedProduct = await this.productRepository.save(product);
    return plainToInstance(ProductResDto, savedProduct);
  }

  async findMany(
    dto: ListBaseReqDto
  ): Promise<OffsetPaginatedDto<ProductResDto>> {
    const query = this.productRepository
      .createQueryBuilder("product")
      .leftJoinAndSelect("product.variants", "variants");

    const [base, metaDto] = await paginate<Product>(query, dto, {
      skipCount: false,
      takeAll: false,
    });

    return new OffsetPaginatedDto(
      plainToInstance(ProductResDto, base),
      metaDto
    );
  }

  async findOne(id: string): Promise<ProductResDto> {
    const product = await this.productRepository.findOne({
      where: { id },
      relations: ["variants"],
    });

    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }

    return plainToInstance(ProductResDto, product);
  }

  async update(
    id: string,
    updateDto: UpdateProductDto
  ): Promise<ProductResDto> {
    const updatedProduct = await this.productRepository.update(id, updateDto);
    return plainToInstance(ProductResDto, updatedProduct);
  }

  private async findOneEntity(id: string): Promise<Product> {
    const product = await this.productRepository.findOne({
      where: { id },
      relations: ["variants"],
    });

    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }

    return product;
  }

  async remove(id: string): Promise<void> {
    const entity = await this.findOneEntity(id);
    await this.productRepository.remove(entity);
  }

  async addVariant(
    productId: string,
    variantDto: CreateProductVariantDto
  ): Promise<ProductVariant> {
    const product = await this.findOneEntity(productId);
    const variant = new ProductVariant();
    Object.assign(variant, {
      ...variantDto,
      product,
    });
    return this.productRepository.save(variant);
  }

  async updateVariant(
    productId: string,
    variantId: string,
    variantDto: Partial<CreateProductVariantDto>
  ): Promise<ProductVariant> {
    const product = await this.findOne(productId);
    const variant = await this.productRepository.manager.findOne(
      ProductVariant,
      {
        where: { id: variantId, product: { id: productId } },
      }
    );

    if (!variant) {
      throw new NotFoundException(
        `Variant with ID ${variantId} not found in product ${productId}`
      );
    }

    Object.assign(variant, variantDto);
    return this.productRepository.manager.save(variant);
  }

  async removeVariant(productId: string, variantId: string): Promise<void> {
    const variant = await this.productRepository.manager.findOne(
      ProductVariant,
      {
        where: { id: variantId, product: { id: productId } },
      }
    );

    if (!variant) {
      throw new NotFoundException(
        `Variant with ID ${variantId} not found in product ${productId}`
      );
    }

    await this.productRepository.manager.remove(variant);
  }
}
