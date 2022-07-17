import { CreateUserDto } from '@app/user/dto/CreateUser.dto';
import { UserService } from '@app/user/user.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('users')
  async createUser(@Body('user') createUserDto: CreateUserDto): Promise<any> {
    console.log('createUser', createUserDto);
    return this.userService.createUser(createUserDto);
  }
}
