import { NestFactory, Reflector } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { ConfigService } from "@nestjs/config";
import { AllConfigType } from "./config/config.type";
import { json } from "express";
import {
  ClassSerializerInterceptor,
  HttpStatus,
  UnprocessableEntityException,
  ValidationPipe,
} from "@nestjs/common";
import { ValidationError } from "class-validator";
import { initializeTransactionalContext } from "typeorm-transactional";
import path from "path";
import * as express from "express";
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const reflector = app.get(Reflector);
  const configService = app.get(ConfigService<AllConfigType>);

  const corsOrigin = configService.getOrThrow("app.corsOrigin", {
    infer: true,
  });
  app.enableCors({
    preflightContinue: false,
    origin: corsOrigin,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: [
      "Content-Type",
      "Accept",
      "Authorization",
      "authorizationexpire",
      "tus-resumable",
      "upload-length",
      "upload-metadata",
      "videoid",
      "upload-offset",
      "upload-concat",
      "x-os",
      "x-device",
      "x-device-id",
      "x-tenant-id",
    ],
    credentials: true,
  });
  app.use(json({ limit: "500kb" }));

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
      exceptionFactory: (errors: ValidationError[]) => {
        return new UnprocessableEntityException(errors);
      },
    })
  );

  app.useGlobalInterceptors(new ClassSerializerInterceptor(reflector, {}));

  // Cấu hình Swagger
  const config = new DocumentBuilder()
    .setTitle("CRM API")
    .setVersion("1.0")
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document); // Swagger UI sẽ chạy tại /api
  app.use("/public", express.static(path.join(__dirname, "public")));
  await app.listen(
    configService.getOrThrow("app.port", { infer: true }),
    () => {
      console.log(
        `Application is running on: ${configService.getOrThrow("app.url", {
          infer: true,
        })}`
      );
    }
  );
}
bootstrap();
