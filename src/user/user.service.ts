import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '@app/user/dto/CreateUser.dto';
import { UserEnitity } from '@app/user/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { sign } from 'jsonwebtoken';
import { UserResponseInterface } from '@app/user/types/UserResponse.interface';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEnitity)
    private readonly userRepository: Repository<UserEnitity>,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<UserEnitity> {
    const newUser = new UserEnitity();
    Object.assign(newUser, createUserDto);
    return await this.userRepository.save(newUser);
  }

  generateJwt(user: UserEnitity): string {
    return sign(
      { id: user.id, user: user.username, email: user.email },
      process.env.JWT_SECRET,
    );
  }

  buildUserResponse(user: UserEnitity): UserResponseInterface {
    return {
      user: { ...user, token: this.generateJwt(user) },
    };
  }
}
