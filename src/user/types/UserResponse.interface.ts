import { UserType } from '@app/user/types/User.type';

export interface UserResponseInterface {
  user: UserType & { token: string };
}
