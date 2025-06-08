import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";

@Injectable()
export class DatabaseConfigService implements TypeOrmOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    // Example: Get tenant DB details dynamically from env
    const tenantDB = this.configService.get<string>("TENANT_DB");
    const tenantUser = this.configService.get<string>("TENANT_USER");
    const tenantPass = this.configService.get<string>("TENANT_PASS");

    return {
      type: "postgres",
      host: this.configService.get<string>("DATABASE_HOST"),
      port: Number(this.configService.get<number>("DATABASE_PORT")),
      username:
        tenantUser || this.configService.get<string>("DATABASE_USERNAME"),
      password:
        tenantPass || this.configService.get<string>("DATABASE_PASSWORD"),
      database: tenantDB || this.configService.get<string>("DATABASE_NAME"),
      entities: [__dirname + "/../**/*.entity{.ts,.js}"],
      migrations: [__dirname + "/../db/migrations/*.{.ts,.js}"],
      synchronize: true, // Set to false in production
    };
  }
}
