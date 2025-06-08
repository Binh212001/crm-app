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
import { TeamService } from "./services/team.service";
import { CreateTeamDto } from "./dto/create-team.dto";
import { UpdateTeamDto } from "./dto/update-team.dto";
import { TeamResDto } from "./dto/team.res.dto";
import { ListBaseReqDto } from "@/api/base/dto/list-base.req.dto";
import { OffsetPaginatedDto } from "@/common/dto/offset-pagination/paginated.dto";
import { DeleteBaseResDto } from "@/api/base/dto/delete-base.res.dto";
import { UpdateBaseResDto } from "@/api/base/dto/update-base.res.dto";
import { ApiAuth } from "@/decorators/http.decorators";

@Controller("teams")
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @ApiAuth({
    type: CreateTeamDto,
    description: "Create a new team record",
  })
  @Post()
  create(@Body() createTeamDto: CreateTeamDto): Promise<TeamResDto> {
    return this.teamService.create(createTeamDto);
  }

  @ApiAuth({
    type: TeamResDto,
    description: "Get all teams with pagination",
  })
  @Get()
  findAll(
    @Query() dto: ListBaseReqDto
  ): Promise<OffsetPaginatedDto<TeamResDto>> {
    return this.teamService.findMany(dto);
  }

  @ApiAuth({
    type: String,
    description: "Get team by ID",
  })
  @Get(":id")
  findOne(@Param("id") id: string): Promise<TeamResDto> {
    return this.teamService.findOne(id);
  }

  @ApiAuth({
    type: UpdateTeamDto,
    description: "Update team by ID",
  })
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateTeamDto: UpdateTeamDto
  ): Promise<UpdateBaseResDto> {
    return this.teamService.updateLead(id, updateTeamDto);
  }

  @ApiAuth({
    type: String,
    description: "Delete team by ID",
  })
  @Delete(":id")
  remove(@Param("id") id: string): Promise<DeleteBaseResDto> {
    return this.teamService.delete(id);
  }
}
