import { Controller, Get } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { UserService } from './user.service';
import { IUserDetails, IUserDto } from './user.interface';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @GrpcMethod('UserService', 'GetUserDetails')
  getUserDetails(data: IUserDto): IUserDetails {
    return this.userService.getUserDetails(data);
  }
}
