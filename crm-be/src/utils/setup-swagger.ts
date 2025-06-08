import { type AllConfigType } from "@/config/config.type";
import { type INestApplication } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

function setupSwagger(app: INestApplication) {
  const configService = app.get(ConfigService<AllConfigType>);
  const appName = configService.getOrThrow("app.name", { infer: true });

  const config = new DocumentBuilder()
    .setTitle("SaaS VMaster API")
    .setDescription("API for SaaS VMaster multi-tenancy system")
    .setVersion("1.0")
    .addBearerAuth() // Nếu bạn thêm auth với JWT sau này
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document); // Swagger UI sẽ chạy tại /api
}

export default setupSwagger;
