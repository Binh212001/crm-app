import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { LeadStatusService } from "./services/lead-status.service";
import { CreateLeadStatusDto } from "./dto/create-lead-status.dto";
import { UpdateLeadStatusDto } from "./dto/update-lead-status.dto";
import { LeadStatus } from "./lead-status.entity";

@Controller("lead-statuses")
export class LeadStatusController {
  constructor(private readonly leadStatusService: LeadStatusService) {}

  @Post()
  create(@Body() createDto: CreateLeadStatusDto): Promise<LeadStatus> {
    return this.leadStatusService.create(createDto);
  }

  @Get()
  findAll(): Promise<LeadStatus[]> {
    return this.leadStatusService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string): Promise<LeadStatus> {
    return this.leadStatusService.findOne(id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateDto: UpdateLeadStatusDto
  ): Promise<LeadStatus> {
    return this.leadStatusService.update(id, updateDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string): Promise<void> {
    return this.leadStatusService.remove(id);
  }
}
