import { Module } from "@nestjs/common";
import { BullModule } from "@nestjs/bull";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { EmailQueueService } from "./email-queue.service";
import { MailerModule } from "@nestjs-modules/mailer";
import { EmailWorkerService } from "./email.worker.service";

@Module({
  imports: [
    BullModule.registerQueue({
      name: "email-queue",
    }),
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        transport: {
          host: configService.get("MAIL_HOST", "localhost"),
          port: configService.get("MAIL_PORT", 1025),
          secure: configService.get("MAIL_SECURE", false),
          ignoreTLS: configService.get("MAIL_IGNORE_TLS", true),
          requireTLS: configService.get("MAIL_REQUIRE_TLS", false),
          auth: {
            user: configService.get("MAIL_USER", ""),
            pass: configService.get("MAIL_PASSWORD", ""),
          },
        },
        defaults: {
          from: {
            address: configService.get(
              "MAIL_DEFAULT_EMAIL",
              "noreply@example.com"
            ),
            name: configService.get("MAIL_DEFAULT_NAME", "No Reply"),
          },
        },
        template: {
          dir: process.cwd() + "/templates",
          adapter: require("handlebars"),
          options: {
            strict: true,
          },
        },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [EmailWorkerService, EmailQueueService],
  exports: [EmailQueueService],
})
export class WorkerHostModule {}
