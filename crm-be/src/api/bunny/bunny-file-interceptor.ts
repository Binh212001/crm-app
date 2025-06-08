import { Request } from "express";
import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from "@nestjs/common";
import axios from "axios";
import multer from "multer";
import { Observable, from, map, switchMap } from "rxjs";

@Injectable()
export class BunnyUploadInterceptor implements NestInterceptor {
  private readonly multerInstance: any;

  constructor(
    private readonly storageZone = "demo2002",
    private readonly apiKey = "d1b10df3-863c-4eff-b4cfcce9a44a-f055-450e",
    private readonly folder = "images"
  ) {
    this.multerInstance = multer({
      storage: multer.memoryStorage(),
      limits: {
        fileSize: 10 * 1024 * 1024, // 10MB per file
      },
    }).array("files"); // 👈 xử lý nhiều file với key là 'files'
  }

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest();
    const res = context.switchToHttp().getResponse();

    return new Observable((observer) => {
      this.multerInstance(req, res, (err: any) => {
        if (err) {
          observer.error(err);
        } else {
          observer.next(req);
          observer.complete();
        }
      });
    }).pipe(
      switchMap(() => {
        const files: Express.Multer.File[] = req.files;

        if (!files || files.length === 0) {
          return next.handle(); // Không có file
        }

        // Tạo danh sách upload
        const uploadTasks = files.map((file) => {
          const fileName = `${Date.now()}-${file.originalname}`;
          const uploadUrl = `https://storage.bunnycdn.com/${this.storageZone}/${this.folder}/${fileName}`;

          return from(
            axios.put(uploadUrl, file.buffer, {
              headers: {
                AccessKey: this.apiKey,
                "Content-Type": "application/octet-stream",
              },
            })
          ).pipe(
            map(
              () =>
                `https://${this.storageZone}.b-cdn.net/${this.folder}/${fileName}`
            )
          );
        });

        return from(
          Promise.all(uploadTasks.map((obs) => obs.toPromise()))
        ).pipe(
          map((uploadedUrls: string[]) => {
            req.fileUrls = uploadedUrls; // ⬅️ gán URL file vào request
            return req;
          }),
          switchMap(() => next.handle())
        );
      })
    );
  }
}
