import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from "@nestjs/common";
import { LeadService } from "./services/lead.service";
import { CreateLeadDto } from "./dto/create-lead.dto";
import { UpdateLeadDto } from "./dto/update-lead.dto";
import { AssignLeadDto } from "./dto/assign-lead.dto";
import { MergeLeadDto } from "./dto/merge-lead.dto";
import { ListBaseReqDto } from "@/api/base/dto/list-base.req.dto";
import { OffsetPaginatedDto } from "@/common/dto/offset-pagination/paginated.dto";
import { DeleteBaseResDto } from "@/api/base/dto/delete-base.res.dto";
import { UpdateBaseResDto } from "@/api/base/dto/update-base.res.dto";
import { ApiAuth } from "@/decorators/http.decorators";
import { LeadResDto } from "./dto/lead-res.dto";
import { ListLeadReqDto } from "./dto/list-lead-req.dto";
import { CurrentUser } from "@/decorators/current-user.decorator";
import { LeadMergeHistory } from "./lead-merge-history.entity";

@Controller("leads")
export class LeadController {
  constructor(private readonly leadService: LeadService) {}

  @ApiAuth({
    type: CreateLeadDto,
    description: "Create a new lead record",
  })
  @Post()
  create(@Body() createLeadDto: CreateLeadDto): Promise<LeadResDto> {
    return this.leadService.create(createLeadDto);
  }

  @ApiAuth({
    type: LeadResDto,
    description: "Get all leads with pagination",
  })
  @Get()
  findAll(
    @Query() dto: ListLeadReqDto
  ): Promise<OffsetPaginatedDto<LeadResDto>> {
    return this.leadService.findMany(dto);
  }

  @ApiAuth({
    type: String,
    description: "Get lead by ID",
  })
  @Get(":id")
  findOne(@Param("id") id: string): Promise<LeadResDto> {
    return this.leadService.findOne(id);
  }

  @ApiAuth({
    type: UpdateLeadDto,
    description: "Update lead by ID",
  })
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateLeadDto: UpdateLeadDto
  ): Promise<UpdateBaseResDto> {
    return this.leadService.updateLead(id, updateLeadDto);
  }

  @ApiAuth({
    type: AssignLeadDto,
    description: "Assign lead to employee",
  })
  @Post(":id/assign")
  assign(
    @Param("id") id: string,
    @Body() assignLeadDto: AssignLeadDto
  ): Promise<LeadResDto> {
    return this.leadService.assign(id, assignLeadDto);
  }

  @ApiAuth({
    type: MergeLeadDto,
    description: "Merge two leads",
  })
  @Post("merge")
  merge(
    @Body() mergeLeadDto: MergeLeadDto,
    @CurrentUser() user: any
  ): Promise<LeadResDto> {
    return this.leadService.merge(mergeLeadDto, user);
  }

  @ApiAuth({
    type: String,
    description: "Get lead merge history",
  })
  @Get(":id/merge-history")
  getMergeHistory(@Param("id") id: string): Promise<LeadMergeHistory[]> {
    return this.leadService.getMergeHistory(id);
  }

  @ApiAuth({
    type: String,
    description: "Get undoable merges for a lead",
  })
  @Get(":id/undoable-merges")
  getUndoableMerges(@Param("id") id: string): Promise<LeadMergeHistory[]> {
    return this.leadService.getUndoableMerges(id);
  }

  @ApiAuth({
    type: String,
    description: "Undo a lead merge",
  })
  @Post("merge/:mergeHistoryId/undo")
  undoMerge(
    @Param("mergeHistoryId") mergeHistoryId: string,
    @CurrentUser() user: any
  ): Promise<LeadResDto> {
    return this.leadService.undoMerge(mergeHistoryId, user);
  }

  @ApiAuth({
    type: String,
    description: "Delete lead by ID",
  })
  @Delete(":id")
  remove(@Param("id") id: string): Promise<DeleteBaseResDto> {
    return this.leadService.delete(id);
  }
}
