import { Controller, Get, UseFilters, ForbiddenException } from '@nestjs/common';
import { AppService } from './app.service';
import { ExceptionfilterFilter } from './exceptionfilter.filter';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
