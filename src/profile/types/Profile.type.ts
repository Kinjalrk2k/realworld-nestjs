import { UserType } from '@app/user/types/User.type';

export type ProfileType = UserType & { following: boolean };
