import { UserEnitity } from '@app/user/user.entity';

export type UserType = Omit<UserEnitity, 'hashPassword'>;
