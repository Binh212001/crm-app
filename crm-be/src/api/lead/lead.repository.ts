import { Injectable } from "@nestjs/common";
import { DataSource } from "typeorm";
import { Lead } from "./lead.entity";
import { BaseRepository } from "../base/base.repository";

@Injectable()
export class LeadRepository extends BaseRepository<Lead> {
  constructor(private readonly dataSource: DataSource) {
    super(Lead, dataSource.createEntityManager());
  }
}
