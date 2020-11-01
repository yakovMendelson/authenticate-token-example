import { Injectable, NestMiddleware, ForbiddenException, UseFilters } from '@nestjs/common';
import { ExceptionfilterFilter } from 'src/exceptionfilter.filter';

@Injectable()
@UseFilters(new ExceptionfilterFilter())
export class CheckTokenMiddleware implements NestMiddleware {
  use(req: Request, res: any, next: () => void) {
    if(req.headers['token']=='My-Token'){
       next();
    }
    else
    throw new  ForbiddenException();
  }
}
