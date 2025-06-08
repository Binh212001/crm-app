import {
  createParamDecorator,
  ExecutionContext,
  UnprocessableEntityException,
  ValidationError,
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';

export const RequestHeader = createParamDecorator(
  //Removed ClassType<unknown>,, I don't think you need this here
  async (value: any, ctx: ExecutionContext) => {
    const headers = ctx.switchToHttp().getRequest().headers;

    const dto = plainToInstance(value, headers, {
      excludeExtraneousValues: true,
    });

    const errors: ValidationError[] = await validate(dto);
    if (errors.length > 0) {
      //Get the errors and push to custom array
      throw new UnprocessableEntityException(errors, {
        description: 'Headers validation failed',
      });
    }

    return dto;
  },
);
