import { ApiModule } from "@/api/api.module";
import appConfig from "@/config/app.config";
import { TypeOrmConfigService } from "@/database/typeorm-config.service";
import { ModuleMetadata } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { ServeStaticModule } from "@nestjs/serve-static";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ClsModule } from "nestjs-cls";
import { BullModule } from "@nestjs/bull";
import path from "path";
import { DataSource, DataSourceOptions } from "typeorm";
import {
  addTransactionalDataSource,
  initializeTransactionalContext,
  StorageDriver,
} from "typeorm-transactional";

function generateModulesSet() {
  const imports: ModuleMetadata["imports"] = [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig],
      envFilePath: [".env"],
    }),
    ServeStaticModule.forRoot({
      rootPath: path.join(__dirname, "../../../", "public"),
    }),
  ];

  const redisModule = BullModule.forRootAsync({
    imports: [ConfigModule],
    useFactory: async (configService: ConfigService) => ({
      redis: {
        host: configService.get("REDIS_HOST", "localhost"),
        port: configService.get("REDIS_PORT", 8002),
        password: configService.get("REDIS_PASSWORD", "redispass"),
      },
    }),
    inject: [ConfigService],
  });

  const dbModule = TypeOrmModule.forRootAsync({
    useClass: TypeOrmConfigService,
    dataSourceFactory: async (options: DataSourceOptions) => {
      if (!options) {
        throw new Error("Invalid options passed");
      }
      initializeTransactionalContext({
        storageDriver: StorageDriver.ASYNC_LOCAL_STORAGE,
      });

      return addTransactionalDataSource(new DataSource(options));
    },
  });

  const clsModule = ClsModule.forRootAsync({
    global: true,
    useFactory: () => ({
      middleware: {
        mount: true,
        setup: (cls, req) => {
          cls.set("origin", req.headers["origin"] ?? "http://localhost:3000");
          cls.set("tenantId", req.headers["x-tenant-id"] ?? "root");
        },
      },
    }),
  });

  const customModules = [clsModule, dbModule, redisModule, ApiModule];

  return imports.concat(customModules);
}

export default generateModulesSet;
