import { BackendValidationPipe } from '@app/common/pipes/BackendValidation.pipe';
import { ExpressRequest } from '@app/types/ExpressRequest.interface';
import { User } from '@app/user/decorators/user.decorator';
import { CreateUserDto } from '@app/user/dto/CreateUser.dto';
import { LoginUserDto } from '@app/user/dto/LoginUser.dto';
import { UpdateUserDto } from '@app/user/dto/UpdateUser.dto';
import { AuthGuard } from '@app/user/guards/auth.guard';
import { UserResponseInterface } from '@app/user/types/UserResponse.interface';
import { UserEnitity } from '@app/user/user.entity';
import { UserService } from '@app/user/user.service';
import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Req,
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import { Request } from 'express';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('users')
  @UsePipes(new BackendValidationPipe())
  async createUser(
    @Body('user') createUserDto: CreateUserDto,
  ): Promise<UserResponseInterface> {
    const user = await this.userService.createUser(createUserDto);
    return this.userService.buildUserResponse(user);
  }

  @Post('users/login')
  @UsePipes(new BackendValidationPipe())
  async login(
    @Body('user') loginUserDto: LoginUserDto,
  ): Promise<UserResponseInterface> {
    const user = await this.userService.login(loginUserDto);
    return this.userService.buildUserResponse(user);
  }

  @Get('user')
  @UseGuards(AuthGuard)
  async currentUser(@User() user: UserEnitity): Promise<UserResponseInterface> {
    return this.userService.buildUserResponse(user);
  }

  @Put('user')
  @UseGuards(AuthGuard)
  async updateUser(
    @User('id') currentUserId: number,
    @Body('user') updateUserDto: UpdateUserDto,
  ): Promise<UserResponseInterface> {
    const updatedUser = await this.userService.updateUser(
      currentUserId,
      updateUserDto,
    );
    return this.userService.buildUserResponse(updatedUser);
  }
}
