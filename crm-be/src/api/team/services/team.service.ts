import { Injectable, NotFoundException } from "@nestjs/common";
import { Team } from "../team.entity";
import { TeamRepository } from "../team.reposiroty";
import { DepartmentRepository } from "@/api/department/department.repository";
import { CreateTeamDto } from "../dto/create-team.dto";
import { UpdateTeamDto } from "../dto/update-team.dto";
import { TeamResDto } from "../dto/team.res.dto";
import { ListBaseReqDto } from "@/api/base/dto/list-base.req.dto";
import { BaseService } from "@/api/base/base.service";
import { OffsetPaginatedDto } from "@/common/dto/offset-pagination/paginated.dto";
import { paginate } from "@/utils/offset-pagination";
import { plainToInstance } from "class-transformer";

@Injectable()
export class TeamService extends BaseService<
  Team,
  TeamResDto,
  CreateTeamDto,
  UpdateTeamDto
> {
  constructor(
    private teamRepository: TeamRepository,
    private departmentRepository: DepartmentRepository
  ) {
    super(teamRepository);
  }

  async create(createTeamDto: CreateTeamDto): Promise<TeamResDto> {
    const department = await this.departmentRepository.findOne({
      where: { id: createTeamDto.departmentId },
    });

    if (!department) {
      throw new NotFoundException("Department not found");
    }

    const team = this.teamRepository.create({
      ...createTeamDto,
      department,
    });

    const savedTeam = await this.teamRepository.save(team);
    return plainToInstance(TeamResDto, savedTeam);
  }

  async findMany(dto: ListBaseReqDto): Promise<OffsetPaginatedDto<TeamResDto>> {
    const { q } = dto;
    const query = this.teamRepository
      .createQueryBuilder("team")
      .leftJoinAndSelect("team.department", "department")
      .leftJoinAndSelect("team.employees", "employees");

    if (q) {
      query.andWhere("team.name ILIKE :q", { q: `%${q}%` });
    }

    const [base, metaDto] = await paginate<Team>(query, dto, {
      skipCount: false,
      takeAll: false,
    });

    return new OffsetPaginatedDto(plainToInstance(TeamResDto, base), metaDto);
  }

  async findOne(id: string): Promise<TeamResDto> {
    const team = await this.teamRepository.findOne({
      where: { id },
      relations: ["department", "employees"],
    });

    if (!team) {
      throw new NotFoundException("Team not found");
    }

    return plainToInstance(TeamResDto, team);
  }
}
