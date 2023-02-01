export interface IUserDto {
  username: string;
  password: string;
}

export interface IUserInfo {
  id: number;
  userId: number;
  name: string;
  email: string;
  dob: string;
}

export interface IUserDetails {
  id: number;
  username: string;
  password: string;
  info: IUserInfo;
}
