import { ListBaseReqDto } from "@/api/base/dto/list-base.req.dto";
import { StringFieldOptional } from "@/decorators/field.decorators";

export class ListCustomerReq extends ListBaseReqDto {
  @StringFieldOptional()
  name?: string;

  @StringFieldOptional()
  email?: string;

  @StringFieldOptional()
  phone?: string;
}
