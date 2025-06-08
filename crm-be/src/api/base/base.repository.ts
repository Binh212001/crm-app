import { AbstractEntity } from "@/database/entities/abstract.entity";
import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
@Injectable()
export abstract class BaseRepository<
  Entity extends AbstractEntity
> extends Repository<Entity> {}
