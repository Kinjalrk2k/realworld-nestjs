import { Transform } from 'class-transformer';

export class FindAllQueryDto {
  tag: string;

  author: string;

  favorited: string;

  @Transform(({ value }) => Number.parseInt(value))
  limit: number = 20;

  @Transform(({ value }) => Number.parseInt(value))
  offset: number = 0;
}
