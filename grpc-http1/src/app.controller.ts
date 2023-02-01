import { Body, Controller, Get, OnModuleInit, Post } from '@nestjs/common';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { AppService } from './app.service';
import {
  SummatorServiceClient,
  UserDetailsServiceClient,
} from './grpc.interface';
import { microserviceOptions } from './grpc.options';
import { IUserDetails } from './user.interface';

@Controller()
export class AppController implements OnModuleInit {
  @Client(microserviceOptions)
  private client: ClientGrpc;

  private mathService: SummatorServiceClient;
  private userService: UserDetailsServiceClient;

  onModuleInit() {
    this.mathService =
      this.client.getService<SummatorServiceClient>('MathService');
    this.userService =
      this.client.getService<UserDetailsServiceClient>('UserService');
  }

  @Get('add')
  add(): Observable<{ sum: number }> {
    return this.mathService.sum({ numbers: [1, 2, 3, 4, 5] });
  }
  @Get('user')
  getUserDetails(): Observable<IUserDetails> {
    return this.userService.getUserDetails({
      username: 'karl',
      password: '012',
    });
  }
}
