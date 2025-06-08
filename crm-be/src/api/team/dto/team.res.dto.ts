import { Expose, Type } from "class-transformer";
import { BaseResDto } from "@/api/base/dto/base.res.dto";
import { DepartmentResDto } from "@/api/department/dto/department.res.dto";
import { EmployeeResDto } from "@/api/employee/dto/employee.res.dto";

export class TeamResDto extends BaseResDto {
  @Expose()
  name: string;

  @Expose()
  description: string;

  @Expose()
  @Type(() => DepartmentResDto)
  department: DepartmentResDto;

  @Expose()
  @Type(() => EmployeeResDto)
  employees: EmployeeResDto[];
}
