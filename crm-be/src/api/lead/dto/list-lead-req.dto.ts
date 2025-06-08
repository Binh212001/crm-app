import { ListBaseReqDto } from "@/api/base/dto/list-base.req.dto";
import {
  LeadSource,
  LeadRegion,
  LeadProduct,
  LeadInteractionLevel,
} from "../lead.entity";
import {
  EnumFieldOptional,
  StringFieldOptional,
  UUIDFieldOptional,
} from "@/decorators/field.decorators";

export class ListLeadReqDto extends ListBaseReqDto {
  @EnumFieldOptional(() => LeadSource)
  source?: LeadSource;

  @EnumFieldOptional(() => LeadRegion)
  region?: LeadRegion;

  @EnumFieldOptional(() => LeadProduct)
  product?: LeadProduct;

  @StringFieldOptional()
  statusId?: string;

  @EnumFieldOptional(() => LeadInteractionLevel)
  interactionLevel?: LeadInteractionLevel;

  @StringFieldOptional({ each: true })
  tags?: string[];

  @UUIDFieldOptional()
  assignedTo?: string;
}
