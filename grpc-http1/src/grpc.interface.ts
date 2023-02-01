import { Observable } from 'rxjs';
import { IUserDetails, IUserDto } from './user.interface';

export interface SummatorServiceClient {
  sum(data: { numbers: number[] }): Observable<{ sum: number }>;
}
export interface UserDetailsServiceClient {
  getUserDetails(data: IUserDto): Observable<IUserDetails>;
}
