import { Expose, Type } from "class-transformer";
import { BaseResDto } from "@/api/base/dto/base.res.dto";
import { TeamResDto } from "@/api/team/dto/team.res.dto";

export class DepartmentResDto extends BaseResDto {
  @Expose()
  name: string;

  @Expose()
  description: string;

  @Expose()
  @Type(() => TeamResDto)
  teams: TeamResDto[];
}
