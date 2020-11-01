import { ExceptionFilter, Catch, ArgumentsHost, HttpException, ForbiddenException } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch( ForbiddenException)
export class ExceptionfilterFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    response
      .status(320)
      .json({
        statusCode: 320,
        timestamp: new Date().toISOString(),
        message:'WRONG TOKEN OR NOT GIVEN'
      });
  }
}
