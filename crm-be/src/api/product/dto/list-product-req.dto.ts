import { ListBaseReqDto } from "@/api/base/dto/list-base.req.dto";
import { StringFieldOptional } from "@/decorators/field.decorators";

export class ListProductReqDto extends ListBaseReqDto {
  @StringFieldOptional()
  name?: string;

  @StringFieldOptional()
  type?: string;

  @StringFieldOptional()
  status?: string;
}
