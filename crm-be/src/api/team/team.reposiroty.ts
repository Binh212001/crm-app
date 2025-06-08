import { Injectable } from "@nestjs/common";
import { DataSource } from "typeorm";
import { Team } from "./team.entity";
import { BaseRepository } from "../base/base.repository";

@Injectable()
export class TeamRepository extends BaseRepository<Team> {
  constructor(private readonly dataSource: DataSource) {
    super(Team, dataSource.createEntityManager());
  }
}
