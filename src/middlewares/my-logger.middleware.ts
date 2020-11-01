import { Injectable, NestMiddleware } from '@nestjs/common';



@Injectable()
export class MyLoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    if (req.method == 'GET') {
      console.log('header', req.headers, 'params', req.url);
    }
    else if (req.method == 'POST')
      console.log('Body', req.body);
    next();
  }
}
