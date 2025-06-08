import { Injectable, NotFoundException } from "@nestjs/common";
import { TagRepository } from "../tag.repository";
import { CreateTagDto } from "../dto/create-tag.dto";
import { UpdateTagDto } from "../dto/update-tag.dto";
import { Tag } from "../tag.entity";
import { paginate } from "@/utils/offset-pagination";
import { OffsetPaginatedDto } from "@/common/dto/offset-pagination/paginated.dto";
import { ListTagReq } from "../dto/list-tag-req.dto";

@Injectable()
export class TagService {
  constructor(private readonly tagRepository: TagRepository) {}

  async create(createDto: CreateTagDto): Promise<Tag> {
    const tag = this.tagRepository.create(createDto);
    return this.tagRepository.save(tag);
  }

  async findMany(dto: ListTagReq): Promise<OffsetPaginatedDto<Tag>> {
    const { name, color } = dto;
    const query = this.tagRepository.createQueryBuilder("tag");

    if (name) {
      query.andWhere("tag.name ILIKE :name", { name: `%${name}%` });
    }

    if (color) {
      query.andWhere("tag.color = :color", { color });
    }

    const [base, metaDto] = await paginate<Tag>(query, dto, {
      skipCount: false,
      takeAll: false,
    });

    return new OffsetPaginatedDto(base, metaDto);
  }

  async findOne(id: string): Promise<Tag> {
    const tag = await this.tagRepository.findOne({
      where: { id },
      relations: ["leads", "tasks", "customers"],
    });

    if (!tag) {
      throw new NotFoundException(`Tag with ID ${id} not found`);
    }

    return tag;
  }

  async update(id: string, updateDto: UpdateTagDto): Promise<Tag> {
    const tag = await this.findOne(id);
    Object.assign(tag, updateDto);
    return this.tagRepository.save(tag);
  }

  async remove(id: string): Promise<void> {
    const tag = await this.findOne(id);
    await this.tagRepository.remove(tag);
  }
}
