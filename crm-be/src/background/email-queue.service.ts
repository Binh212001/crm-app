import { Injectable } from "@nestjs/common";
import { InjectQueue } from "@nestjs/bull";
import { Queue } from "bull";

@Injectable()
export class EmailQueueService {
  constructor(@InjectQueue("email-queue") private readonly emailQueue: Queue) {}
  async addEmailJob(data: {
    to: string;
    subject: string;
    template: string;
    context: Record<string, any>;
  }) {
    return this.emailQueue.add("send-email", data, {
      attempts: 3,
      backoff: {
        type: "exponential",
        delay: 1000,
      },
    });
  }
}
