import { registerAs } from '@nestjs/config';

export default registerAs('axios', () => ({
  timeout: parseInt(process.env.HTTP_TIMEOUT as string, 10) || 5000,
  maxRedirects: parseInt(process.env.HTTP_MAX_REDIRECTS as string, 10) || 5,
}));
