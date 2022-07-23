import { ArticleService } from '@app/article/article.service';
import { CreateArticleDto } from '@app/article/dto/CreateArticle.dto';
import { User } from '@app/user/decorators/user.decorator';
import { AuthGuard } from '@app/user/guards/auth.guard';
import { UserEnitity } from '@app/user/user.entity';
import { Body, Controller, Post, UseGuards } from '@nestjs/common';

@Controller('articles')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post()
  @UseGuards(AuthGuard)
  async create(
    @User() currentUser: UserEnitity,
    @Body('article') createArticleDto: CreateArticleDto,
  ): Promise<any> {
    return await this.articleService.createArticle(
      currentUser,
      createArticleDto,
    );
  }
}
