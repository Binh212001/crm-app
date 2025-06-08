import { UUIDField } from "@/decorators/field.decorators";

export class MergeLeadDto {
  @UUIDField()
  primaryLeadId: string;

  @UUIDField()
  secondaryLeadId: string;
}
