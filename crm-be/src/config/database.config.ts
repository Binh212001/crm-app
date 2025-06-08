import { registerAs } from "@nestjs/config";

export default registerAs("database", () => ({
  host: process.env.DATABASE_HOST || "localhost",
  port: parseInt(process.env.DATABASE_PORT as string, 10) || 5432,
  username: process.env.DATABASE_USER || "root",
  password: process.env.DATABASE_PASSWORD || "",
  name: process.env.DATABASE_NAME,
  hostVmaster: process.env.DATABASE_USERNAME_ROOT || "",
  portVmaster: process.env.DATABASE_PASSWORD_ROOT || "",
  usernameVmaster: process.env.DATABASE_HOST_ROOT || "",
  passwordVmaster: process.env.DATABASE_PORT_ROOT || "",
}));
