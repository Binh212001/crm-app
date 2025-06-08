import { Module } from "@nestjs/common";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";
@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "..", "uploads"), // Path to your uploads folder
      serveRoot: "/uploads", // URL prefix for serving files
    }),
  ],
  controllers: [],
})
export class BaseModule {}
