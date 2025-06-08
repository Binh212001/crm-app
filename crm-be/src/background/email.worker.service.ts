import { OnWorkerEvent, Processor, WorkerHost } from "@nestjs/bullmq";
import { Job } from "bullmq";
import { MailerService } from "@nestjs-modules/mailer";

interface EmailJobData {
  to: string;
  subject: string;
  template: string;
  context: Record<string, any>;
}

@Processor("email-queue")
export class EmailWorkerService extends WorkerHost {
  constructor(private readonly mailerService: MailerService) {
    super();
  }

  @OnWorkerEvent("completed")
  async handleCompleted(job: Job<EmailJobData>) {
    console.log(`Email sent successfully to ${job.data.to}`);
  }

  @OnWorkerEvent("failed")
  async handleFailed(job: Job<EmailJobData>, error: Error) {
    console.error(`Failed to send email to ${job.data.to}:`, error);
  }

  async process(job: Job<EmailJobData>): Promise<any> {
    const { to, subject, template, context } = job.data;

    await this.mailerService.sendMail({
      to,
      subject,
      template,
      context,
    });

    return { success: true };
  }
}
