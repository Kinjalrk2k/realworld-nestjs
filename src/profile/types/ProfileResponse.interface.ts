import { ProfileType } from '@app/profile/types/Profile.type';

export interface ProfileResponseInterface {
  profile: Omit<ProfileType, 'email'>;
}
