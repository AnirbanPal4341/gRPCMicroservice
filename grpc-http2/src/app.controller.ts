import { Controller, Get } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @GrpcMethod('MathService', 'Sum')
  sum(data: { numbers: number[] }): { sum: number } {
    return { sum: this.appService.accumulate(data.numbers) };
  }
}
