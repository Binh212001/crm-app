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
import { DepartmentService } from "./services/department.service";
import { CreateDepartmentDto } from "./dto/create-department.dto";
import { UpdateDepartmentDto } from "./dto/update-department.dto";
import { DepartmentResDto } from "./dto/department.res.dto";
import { ListBaseReqDto } from "@/api/base/dto/list-base.req.dto";
import { OffsetPaginatedDto } from "@/common/dto/offset-pagination/paginated.dto";
import { DeleteBaseResDto } from "@/api/base/dto/delete-base.res.dto";
import { UpdateBaseResDto } from "@/api/base/dto/update-base.res.dto";
import { ApiAuth } from "@/decorators/http.decorators";

@Controller("departments")
export class DepartmentController {
  constructor(private readonly departmentService: DepartmentService) {}

  @ApiAuth({
    type: CreateDepartmentDto,
    description: "Create a new department record",
  })
  @Post()
  create(
    @Body() createDepartmentDto: CreateDepartmentDto
  ): Promise<DepartmentResDto> {
    return this.departmentService.create(createDepartmentDto);
  }

  @ApiAuth({
    type: DepartmentResDto,
    description: "Get all departments with pagination",
  })
  @Get()
  findAll(
    @Query() dto: ListBaseReqDto
  ): Promise<OffsetPaginatedDto<DepartmentResDto>> {
    return this.departmentService.findMany(dto);
  }

  @ApiAuth({
    type: String,
    description: "Get department by ID",
  })
  @Get(":id")
  findOne(@Param("id") id: string): Promise<DepartmentResDto> {
    return this.departmentService.findOne(id);
  }

  @ApiAuth({
    type: UpdateDepartmentDto,
    description: "Update department by ID",
  })
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateDepartmentDto: UpdateDepartmentDto
  ): Promise<UpdateBaseResDto> {
    return this.departmentService.updateLead(id, updateDepartmentDto);
  }

  @ApiAuth({
    type: String,
    description: "Delete department by ID",
  })
  @Delete(":id")
  remove(@Param("id") id: string): Promise<DeleteBaseResDto> {
    return this.departmentService.delete(id);
  }
}
