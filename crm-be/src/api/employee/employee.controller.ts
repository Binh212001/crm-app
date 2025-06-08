import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseInterceptors,
  Req,
} from "@nestjs/common";
import { EmployeeService } from "./services/employee.service";
import { CreateEmployeeDto } from "./dto/create-employee.dto";
import { UpdateEmployeeDto } from "./dto/update-employee.dto";
import { EmployeeResDto } from "./dto/employee.res.dto";
import { ListBaseReqDto } from "@/api/base/dto/list-base.req.dto";
import { OffsetPaginatedDto } from "@/common/dto/offset-pagination/paginated.dto";
import { DeleteBaseResDto } from "../base/dto/delete-base.res.dto";
import { UpdateBaseResDto } from "../base/dto/update-base.res.dto";
import { ApiAuth } from "@/decorators/http.decorators";
import { BunnyUploadInterceptor } from "../bunny/bunny-file-interceptor";

@Controller("employees")
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @ApiAuth({
    type: CreateEmployeeDto,
    description: "Create a new employee record",
  })
  @UseInterceptors(new BunnyUploadInterceptor())
  @Post()
  create(
    @Body() createEmployeeDto: CreateEmployeeDto,
    @Req() req
  ): Promise<EmployeeResDto> {
    const avatar = req["fileUrls"]?.[0];
    return this.employeeService.create({
      ...createEmployeeDto,
      avatar,
    });
  }

  @ApiAuth({
    type: EmployeeResDto,
    description: "Get all employees with pagination",
  })
  @Get()
  findAll(
    @Query() dto: ListBaseReqDto
  ): Promise<OffsetPaginatedDto<EmployeeResDto>> {
    return this.employeeService.findMany(dto);
  }

  @ApiAuth({
    type: String,
    description: "Get employee by ID",
  })
  @Get(":id")
  findOne(@Param("id") id: string): Promise<EmployeeResDto> {
    return this.employeeService.findOne(id);
  }

  @ApiAuth({
    type: UpdateEmployeeDto,
    description: "Update employee by ID",
  })
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateEmployeeDto: UpdateEmployeeDto
  ): Promise<UpdateBaseResDto> {
    return this.employeeService.updateLead(id, updateEmployeeDto);
  }

  @ApiAuth({
    type: String,
    description: "Delete employee by ID",
  })
  @Delete(":id")
  remove(@Param("id") id: string): Promise<DeleteBaseResDto> {
    return this.employeeService.delete(id);
  }
}
