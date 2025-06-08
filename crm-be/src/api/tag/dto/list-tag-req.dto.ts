import { ListBaseReqDto } from "@/api/base/dto/list-base.req.dto";
import { StringFieldOptional } from "@/decorators/field.decorators";

export class ListTagReq extends ListBaseReqDto {
  @StringFieldOptional()
  name?: string;

  @StringFieldOptional()
  color?: string;
}
