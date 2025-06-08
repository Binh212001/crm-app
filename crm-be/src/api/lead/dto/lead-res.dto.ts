import { Expose, Type } from "class-transformer";
import {
  Lead,
  LeadSource,
  LeadRegion,
  LeadProduct,
  LeadInteractionLevel,
} from "../lead.entity";
import { EmployeeResDto } from "@/api/employee/dto/employee.res.dto";
import { LeadStatus } from "../lead-status.entity";

export class LeadResDto {
  @Expose()
  id: string;

  @Expose()
  firstName: string;

  @Expose()
  lastName: string;

  @Expose()
  phone: string;

  @Expose()
  email: string;

  @Expose()
  address: string;

  @Expose()
  source: LeadSource;

  @Expose()
  region: LeadRegion;

  @Expose()
  product: LeadProduct;

  @Expose()
  interactionLevel: LeadInteractionLevel;

  @Expose()
  @Type(() => LeadStatus)
  status: LeadStatus;

  @Expose()
  tags: string[];

  @Expose()
  notes: string;

  @Expose()
  metadata: Record<string, any>;

  @Expose()
  @Type(() => EmployeeResDto)
  assignedTo: EmployeeResDto;

  @Expose()
  lastContactedAt: Date;

  @Expose()
  assignedAt: Date;

  @Expose()
  isMerged: boolean;

  @Expose()
  mergedFromId: string;

  @Expose()
  mergedAt: Date;

  @Expose()
  createdAt: Date;

  @Expose()
  updatedAt: Date;
}
