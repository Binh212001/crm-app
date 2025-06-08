import { registerAs } from '@nestjs/config';

export default registerAs('email', () => ({
  host: process.env.EMAIL_HOST || 'smtp.mailtrap.io',
  port: process.env.EMAIL_PORT || 2525,
  secure: process.env.EMAIL_IS_SECURE === 'true' ? true : false,
  user: process.env.EMAIL_USER || 'user',
  password: process.env.EMAIL_PASSWORD || 'password',
  from: process.env.EMAIL_FROM || '',
  sender: process.env.EMAIL_NAME_SENDER || 'Learning Serivce',
  confirmationEndPoint:
    process.env.EMAIL_CONFIRMATION_END_POINT || '/vi/confirmation',
  changePasswordEndPoint:
    process.env.EMAIL_CHANGE_PASSWORD_END_POINT || '/vi/change_password',
}));
