import { ApiProperty } from "@nestjs/swagger";
import {
  LeadSource,
  LeadRegion,
  LeadProduct,
  LeadInteractionLevel,
} from "../lead.entity";
import {
  StringField,
  StringFieldOptional,
  EmailFieldOptional,
  EnumField,
  EnumFieldOptional,
  BooleanFieldOptional,
} from "@/decorators/field.decorators";

export class CreateLeadDto {
  @StringField()
  firstName: string;

  @StringField()
  lastName: string;

  @StringField()
  phone: string;

  @EmailFieldOptional()
  email?: string;

  @StringFieldOptional()
  address?: string;

  @EnumField(() => LeadSource)
  source: LeadSource;

  @EnumFieldOptional(() => LeadRegion)
  region?: LeadRegion;

  @EnumFieldOptional(() => LeadProduct)
  product?: LeadProduct;

  @EnumFieldOptional(() => LeadInteractionLevel)
  interactionLevel?: LeadInteractionLevel;

  @StringFieldOptional({ each: true })
  tags?: string[];

  @StringFieldOptional()
  notes?: string;

  @ApiProperty({ type: Object, required: false })
  metadata?: Record<string, any>;

  @BooleanFieldOptional()
  autoClassify?: boolean;
}
