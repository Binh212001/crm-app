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
import { TagService } from "./services/tag.service";
import { CreateTagDto } from "./dto/create-tag.dto";
import { UpdateTagDto } from "./dto/update-tag.dto";
import { Tag } from "./tag.entity";
import { ListTagReq } from "./dto/list-tag-req.dto";
import { OffsetPaginatedDto } from "@/common/dto/offset-pagination/paginated.dto";

@Controller("tags")
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @Post()
  create(@Body() createDto: CreateTagDto): Promise<Tag> {
    return this.tagService.create(createDto);
  }

  @Get()
  findMany(@Query() query: ListTagReq): Promise<OffsetPaginatedDto<Tag>> {
    return this.tagService.findMany(query);
  }

  @Get(":id")
  findOne(@Param("id") id: string): Promise<Tag> {
    return this.tagService.findOne(id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateDto: UpdateTagDto
  ): Promise<Tag> {
    return this.tagService.update(id, updateDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string): Promise<void> {
    return this.tagService.remove(id);
  }
}
