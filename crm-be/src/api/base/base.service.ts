import { BaseRepository } from "@/api/base/base.repository";
import { BaseResDto } from "@/api/base/dto/base.res.dto";
import { CreateBaseReqDto } from "@/api/base/dto/create-base.req.dto";
import { DeleteBaseResDto } from "@/api/base/dto/delete-base.res.dto";
import { UpdateBaseReqDto } from "@/api/base/dto/update-base.req.dto";
import { UpdateBaseResDto } from "@/api/base/dto/update-base.res.dto";
import { CursorPaginationDto } from "@/common/dto/cursor-pagination/cursor-pagination.dto";
import { PageOptionsDto as CursorPageOptionsDto } from "@/common/dto/cursor-pagination/page-options.dto";
import { CursorPaginatedDto } from "@/common/dto/cursor-pagination/paginated.dto";
import { PageOptionsDto } from "@/common/dto/offset-pagination/page-options.dto";
import { OffsetPaginatedDto } from "@/common/dto/offset-pagination/paginated.dto";
import { AbstractEntity } from "@/database/entities/abstract.entity";
import { buildPaginator } from "@/utils/cursor-pagination";
import { paginate } from "@/utils/offset-pagination";
import { plainToInstance } from "class-transformer";
import { BaseEntity } from "typeorm";

export abstract class BaseService<
  Entity extends AbstractEntity = AbstractEntity,
  ResDto extends BaseResDto = BaseResDto,
  CreateReqDto extends CreateBaseReqDto = CreateBaseReqDto,
  UpdateReqDto extends UpdateBaseReqDto = UpdateBaseReqDto,
  ListReqDto extends PageOptionsDto = PageOptionsDto
> {
  private readonly ResDtoClass: new (...args: any[]) => ResDto;

  protected constructor(
    private readonly baseRepository: BaseRepository<Entity>
  ) {}

  async loadMore({
    ...reqDto
  }: CursorPageOptionsDto): Promise<CursorPaginatedDto<ResDto>> {
    const queryBuilder = this.baseRepository.createQueryBuilder("bases");

    const paginator = buildPaginator({
      entity: BaseEntity,
      alias: "bases",
      paginationKeys: ["id"] as any,
      query: {
        limit: reqDto.limit,
        order: "DESC",
        afterCursor: reqDto.afterCursor,
        beforeCursor: reqDto.beforeCursor,
      },
    });

    const { data, cursor } = await paginator.paginate(queryBuilder);

    const metaDto = new CursorPaginationDto(
      data.length,
      cursor.afterCursor,
      cursor.beforeCursor,
      reqDto
    );

    return new CursorPaginatedDto(
      plainToInstance(this.ResDtoClass, data),
      metaDto
    );
  }

  async findMany(reqDto: ListReqDto): Promise<OffsetPaginatedDto<ResDto>> {
    const query = this.baseRepository
      .createQueryBuilder("base")
      .orderBy("base.id", "DESC");
    const [base, metaDto] = await paginate<Entity>(query, reqDto, {
      skipCount: false,
      takeAll: false,
    });
    return new OffsetPaginatedDto(
      plainToInstance(this.ResDtoClass, base),
      metaDto
    );
  }

  async findById(id: string): Promise<ResDto> {
    const base = await this.baseRepository.findOneByOrFail({ id } as any);

    return plainToInstance(this.ResDtoClass, base);
  }

  async create(_reqDto: CreateReqDto): Promise<ResDto> {
    const entity: Entity = this.baseRepository.create(_reqDto as any) as any;
    await this.baseRepository.save(entity);
    return plainToInstance(this.ResDtoClass, entity);
  }

  async updateLead(
    _id: string,
    _reqDto: UpdateReqDto
  ): Promise<UpdateBaseResDto> {
    await this.baseRepository.findOneByOrFail({ id: _id } as any);
    const result = await this.baseRepository.update(
      { id: _id } as any,
      _reqDto as any
    );
    return {
      data: !!result.affected,
    };
  }

  async delete(
    _id: string,
    permanentRemove?: boolean
  ): Promise<DeleteBaseResDto> {
    if (permanentRemove) {
      return {
        data: !!(await this.baseRepository.delete(_id)).affected,
      };
    }
    return {
      data: !!(await this.baseRepository.softDelete(_id)).affected,
    };
  }
}
