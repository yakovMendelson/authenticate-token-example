import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from 'src/app.controller';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { AuthService } from 'src/auth/auth.service';
import { MyLoggerMiddleware } from 'src/middlewares/my-logger.middleware';
import { CheckTokenMiddleware } from 'src/middlewares/check-token.middleware';

@Module({
    controllers: [ UsersController],
    providers: [ UsersService, AuthService],
    exports:[UsersModule]
  })
export class UsersModule {
    configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(MyLoggerMiddleware,)
      .forRoutes( 'users')
      .apply(CheckTokenMiddleware) 
      .exclude('users/authenticate')
      .forRoutes('users')
     
  }
}
