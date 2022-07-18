import { Module } from '@nestjs/common';
import { UserController } from '@app/user/user.controller';
import { UserService } from '@app/user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEnitity } from '@app/user/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEnitity])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
