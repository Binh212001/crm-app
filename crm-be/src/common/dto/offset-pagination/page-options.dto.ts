import { Order, TypeMatch } from "../../../constants/app.constant";
import {
  BooleanFieldOptional,
  EnumFieldOptional,
  NumberFieldOptional,
  StringFieldOptional,
} from "../../../decorators/field.decorators";
import { OffsetPaginationDto } from "./offset-pagination.dto";

export class PageOptionsDto {
  @NumberFieldOptional({
    minimum: 1,
    default: 10,
    int: true,
  })
  readonly limit?: number = 10;

  @EnumFieldOptional(() => TypeMatch, { default: TypeMatch.MATCH })
  typeMatch: TypeMatch = TypeMatch.MATCH;

  @NumberFieldOptional({
    minimum: 1,
    default: 1,
    int: true,
  })
  readonly page?: number = 1;

  @StringFieldOptional()
  readonly q?: string;

  @EnumFieldOptional(() => Order, { default: Order.ASC })
  readonly order?: Order = Order.ASC;

  @BooleanFieldOptional()
  readonly takeAll?: boolean = false;

  get offset() {
    return (this.page > 0 ? this.page - 1 : 0) * (this.limit ?? 10);
  }

  async meta(
    limit: number,
    page: number,
    repo: any
  ): Promise<OffsetPaginationDto> {
    return {
      limit: limit,
      currentPage: page,
      totalRecords: await repo.count(),
      totalPages: Math.ceil((await repo.count()) / limit),
    };
  }
}
