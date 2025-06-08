import { AllConfigType } from "@/config/config.type";
import TypeOrmCustomLogger from "@/utils/typeorm-custom-logger";
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      autoLoadEntities: true,
      type: "postgres",
      host: this.configService.get<string>("DATABASE_HOST"),
      port: Number(this.configService.get<number>("DATABASE_PORT")),
      username: this.configService.get<string>("DATABASE_USERNAME"),
      password: this.configService.get<string>("DATABASE_PASSWORD"),
      database: this.configService.get<string>("DATABASE_NAME"),
      synchronize: true,
      dropSchema: false,
      keepConnectionAlive: true,
      logger: TypeOrmCustomLogger.getInstance(
        "default",
        this.configService.get("database.logging", { infer: true })
          ? ["error", "warn", "query", "schema"]
          : ["error", "warn"]
      ),
      namingStrategy: new SnakeNamingStrategy(),
      entities: [__dirname + "/../**/*.entity{.ts,.js}"],
      // migrations: [__dirname + "/migrations/**/*{.ts,.js}"],
      // migrationsTableName: "migrations",
      poolSize: 10,
    } as TypeOrmModuleOptions;
  }
}
