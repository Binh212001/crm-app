import { StringField } from "@/decorators/field.decorators";

export class LeadToCustomerDto {
  @StringField()
  leadId: string;

  @StringField({ required: false })
  notes?: string;
}
