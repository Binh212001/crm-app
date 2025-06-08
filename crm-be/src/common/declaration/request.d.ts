import { JwtPayloadType } from '@/api/auth/types/jwt-payload.type';
import { UserResDto } from '@/api/user/dto/user.res.dto';

declare global {
  namespace Express {
    export interface Request {
      user: UserResDto;
      payload: JwtPayloadType;
    }
  }
}
