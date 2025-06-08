import { registerAs } from '@nestjs/config';

export default registerAs('firebase', () => ({
  credentials:
    process.env.GOOGLE_APPLICATION_CREDENTIALS ?? 'firebase-admin.json',
  image: process.env.IMAGE_NOTIFICATION ?? '#',
}));
