import { ArticleService } from '@app/article/article.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('articles')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post()
  async create(@Body('article') createArticleDto) {
    return this.articleService.createArticle();
  }
}
