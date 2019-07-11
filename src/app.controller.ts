import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // Just to know how to pass params in a route
  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `Item ${id}`;
  }
}
