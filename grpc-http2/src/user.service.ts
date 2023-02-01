import { Injectable } from '@nestjs/common';
import { IUserDetails, IUserDto } from './user.interface';
import { user_db, user_info_db } from './db';

@Injectable()
export class UserService {
  public getUserDetails(dataDto: IUserDto): IUserDetails {
    const user = user_db.find(
      (data) =>
        data.password == dataDto.password && data.username == dataDto.username,
    );
    const user_info = user_info_db.find((data) => data.userId == user.id);
    const result: IUserDetails = { ...user, info: user_info };
    return result;
  }
}
