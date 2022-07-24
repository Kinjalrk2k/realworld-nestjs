import { ArticleController } from '@app/article/article.controller';
import { ArticleEntity } from '@app/article/article.entity';
import { ArticleService } from '@app/article/article.service';
import { FollowEntity } from '@app/profile/Follow.entity';
import { UserEnitity } from '@app/user/user.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([ArticleEntity, UserEnitity, FollowEntity]),
  ],
  controllers: [ArticleController],
  providers: [ArticleService],
})
export class ArticleModule {}
