import { Injectable, NotFoundException } from "@nestjs/common";
import { Employee } from "../employee.entity";
import { EmployeeRepository } from "../employee.repository";
import { TeamRepository } from "@/api/team/team.reposiroty";
import { CreateEmployeeDto } from "../dto/create-employee.dto";
import { UpdateEmployeeDto } from "../dto/update-employee.dto";
import { EmployeeResDto } from "../dto/employee.res.dto";
import { ListBaseReqDto } from "@/api/base/dto/list-base.req.dto";
import { BaseService } from "@/api/base/base.service";
import { OffsetPaginatedDto } from "@/common/dto/offset-pagination/paginated.dto";
import { paginate } from "@/utils/offset-pagination";
import { plainToInstance } from "class-transformer";

@Injectable()
export class EmployeeService extends BaseService<
  Employee,
  EmployeeResDto,
  CreateEmployeeDto,
  UpdateEmployeeDto
> {
  constructor(
    private employeeRepository: EmployeeRepository,
    private teamRepository: TeamRepository
  ) {
    super(employeeRepository);
  }

  async create(
    createEmployeeDto: CreateEmployeeDto & { avatar?: string }
  ): Promise<EmployeeResDto> {
    let team = null;
    if (createEmployeeDto.teamId) {
      team = await this.teamRepository.findOne({
        where: { id: createEmployeeDto.teamId },
      });

      if (!team) {
        throw new NotFoundException("Team not found");
      }
    }

    const employee = this.employeeRepository.create({
      ...createEmployeeDto,
      team,
    });

    const savedEmployee = await this.employeeRepository.save(employee);
    return plainToInstance(EmployeeResDto, savedEmployee);
  }

  async findMany(
    dto: ListBaseReqDto
  ): Promise<OffsetPaginatedDto<EmployeeResDto>> {
    const { q } = dto;
    const query = this.employeeRepository
      .createQueryBuilder("emp")
      .leftJoinAndSelect("emp.team", "team")
      .leftJoinAndSelect("team.department", "department");

    if (q) {
      query.andWhere(
        "(emp.firstName ILIKE :q OR emp.lastName ILIKE :q OR emp.email ILIKE :q)",
        { q: `%${q}%` }
      );
    }

    const [base, metaDto] = await paginate<Employee>(query, dto, {
      skipCount: false,
      takeAll: false,
    });

    return new OffsetPaginatedDto(
      plainToInstance(EmployeeResDto, base),
      metaDto
    );
  }

  async findOne(id: string): Promise<EmployeeResDto> {
    const employee = await this.employeeRepository.findOne({
      where: { id },
      relations: ["team"],
    });

    if (!employee) {
      throw new NotFoundException("Employee not found");
    }

    return plainToInstance(EmployeeResDto, employee);
  }
}
