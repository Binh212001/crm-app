import { Module } from "@nestjs/common";
import { DatabaseConfigService } from "./common/database-config.service";
import generateModulesSet from "./utils/modules-set";

@Module({
  imports: [...generateModulesSet()],
  providers: [DatabaseConfigService],
  controllers: [],
})
export class AppModule {
  // configure(consumer: MiddlewareConsumer) {}
}
