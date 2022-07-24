import { TagEntity } from '@app/tag/tag.entity';
import { MigrationInterface, QueryRunner } from 'typeorm';
import dataSource from '@app/config/ormSeedDataSource.config';
import { UserEnitity } from '@app/user/user.entity';
import { hash } from 'bcrypt';
import { ArticleEntity } from '@app/article/article.entity';

export class InitialSeed1658665867977 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await dataSource
      .getRepository(TagEntity)
      .createQueryBuilder()
      .insert()
      .into(TagEntity)
      .values([{ name: 'dragons' }, { name: 'coffee' }, { name: 'nestjs' }])
      .execute();

    const user = await dataSource
      .getRepository(UserEnitity)
      .createQueryBuilder()
      .insert()
      .into(UserEnitity)
      .values([
        {
          username: 'Jacob',
          email: 'jake@jake.jake',
          password: await hash('jakejake', 10),
        },
      ])
      .execute();

    console.log(user);

    await dataSource
      .getRepository(ArticleEntity)
      .createQueryBuilder()
      .insert()
      .into(ArticleEntity)
      .values([
        {
          slug: 'first-article',
          title: 'First article',
          description: 'first article desc',
          body: 'first article body',
          tagList: ['coffee', 'dragons'],
          author: { id: user.identifiers[0].id },
        },
        {
          slug: 'second-article',
          title: 'Second article',
          description: 'second article desc',
          body: 'second article body',
          tagList: ['coffee', 'dragons'],
          author: { id: user.identifiers[0].id },
        },
      ])
      .execute();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
