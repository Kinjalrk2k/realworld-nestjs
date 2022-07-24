import { ArticleType } from '@app/article/types/Article.type';

export interface ArticlesResponseInterface {
  articles: ArticleType[];
  articlesCount: number;
}
