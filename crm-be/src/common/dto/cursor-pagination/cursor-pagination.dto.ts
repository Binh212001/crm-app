import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { PageOptionsDto } from './page-options.dto';

export class CursorPaginationDto {
  @ApiProperty()
  @Expose()
  readonly limit: number;

  @ApiProperty()
  @Expose()
  readonly afterCursor?: string | any[];

  @ApiProperty()
  @Expose()
  readonly beforeCursor?: string | any[];

  @ApiProperty()
  @Expose()
  readonly totalRecords: number;

  constructor(
    totalRecords: number,
    afterCursor: string | any[] | null,
    beforeCursor: string | any[] | null,
    pageOptions: PageOptionsDto,
  ) {
    this.limit = pageOptions.limit;
    this.afterCursor = afterCursor;
    this.beforeCursor = beforeCursor;
    this.totalRecords = totalRecords;
  }
}
