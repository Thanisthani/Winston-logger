import { Controller, Get, Inject, LoggerService } from '@nestjs/common';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService
    @Inject(WINSTON_MODULE_NEST_PROVIDER) private readonly logger: LoggerService
  ) { }

  @Get()
  getHello(): string {
    this.logger.log('Info level log');
    this.logger.error('Error level log');
    this.logger.warn('Warning level log');
    return this.appService.getHello();
  }
}
