import { Expose, Type } from "class-transformer";
import { BaseResDto } from "@/api/base/dto/base.res.dto";
import { TeamResDto } from "@/api/team/dto/team.res.dto";

export class EmployeeResDto extends BaseResDto {
  @Expose()
  firstName: string;

  @Expose()
  lastName: string;

  @Expose()
  email: string;

  @Expose()
  phone: string;

  @Expose()
  position: string;

  @Expose()
  address: string;

  @Expose()
  dateOfBirth: Date;

  @Expose()
  hireDate: Date;

  @Expose()
  isActive: boolean;

  @Expose()
  @Type(() => TeamResDto)
  team: TeamResDto;
}
