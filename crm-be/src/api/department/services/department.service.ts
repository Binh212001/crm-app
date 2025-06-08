import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Department } from "../department.entity";
import { CreateDepartmentDto } from "../dto/create-department.dto";
import { DepartmentRepository } from "../department.repository";
import { UpdateDepartmentDto } from "../dto/update-department.dto";
import { DepartmentResDto } from "../dto/department.res.dto";
import { ListBaseReqDto } from "@/api/base/dto/list-base.req.dto";
import { BaseService } from "@/api/base/base.service";
import { OffsetPaginatedDto } from "@/common/dto/offset-pagination/paginated.dto";
import { paginate } from "@/utils/offset-pagination";
import { plainToInstance } from "class-transformer";

@Injectable()
export class DepartmentService extends BaseService<
  Department,
  DepartmentResDto,
  CreateDepartmentDto,
  UpdateDepartmentDto
> {
  constructor(private departmentRepository: DepartmentRepository) {
    super(departmentRepository);
  }

  async create(
    createDepartmentDto: CreateDepartmentDto
  ): Promise<DepartmentResDto> {
    const department = this.departmentRepository.create(createDepartmentDto);
    const savedDepartment = await this.departmentRepository.save(department);
    return plainToInstance(DepartmentResDto, savedDepartment);
  }

  async findMany(
    dto: ListBaseReqDto
  ): Promise<OffsetPaginatedDto<DepartmentResDto>> {
    const { q } = dto;
    const query = this.departmentRepository
      .createQueryBuilder("dept")
      .leftJoinAndSelect("dept.teams", "teams");

    if (q) {
      query.andWhere("dept.name ILIKE :q", { q: `%${q}%` });
    }

    const [base, metaDto] = await paginate<Department>(query, dto, {
      skipCount: false,
      takeAll: false,
    });

    return new OffsetPaginatedDto(
      plainToInstance(DepartmentResDto, base),
      metaDto
    );
  }

  async findOne(id: string): Promise<DepartmentResDto> {
    const department = await this.departmentRepository.findOne({
      where: { id },
      relations: ["teams"],
    });

    if (!department) {
      throw new NotFoundException("Department not found");
    }

    return plainToInstance(DepartmentResDto, department);
  }
}
