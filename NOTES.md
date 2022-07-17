# NestJS - Building Real Project API From Scratch [Only Important Notes]

> Naming convention
> Module names are singulars

- To include a module to the app, include it in the `imports` array of the `AppModule`

## Absolute path

- Absolute path is important = as when we copy paste imorts from one place to another, there might be a case an import path is o longer valid
- Use this in the `tsconfig.json` file:

```json
{
  ...
  "paths": {
    "@app/*": ["./src/*"]
  }
}
```

- Install `module-alias`. Note: This is done for the production build which is in JavaScript

```sh
yarn add module-alias
```

- Configure `module-alias`. Add this to `package.json`

```json
{
  ...
  "_moduleAliases": {
    "@app": "./dist"
  }
}
```

- Require module alias in the `src/main.ts` file. But we only need that in production:

```ts
if (process.env.IS_TS_NODE) {
  require('module-alias/register');
}

/* rest of main.ts... */
```

- Use this in the `start:dev` script in the `package.json` file:

```sh
IS_TS_NODE=true nest start --watch
```

> Optional (for VSCode)
>
> - Add the following to the `.vscode/settings.json` file:
>   ` "typescript.preferences.importModuleSpecifier": "non-relative"`

## Connecting Database

- Install Postgres
- Get into psql

```sh
psql
```

- Create a database

```sql
create database realworld;
```

- Create a new database user

```sql
create user realworlddbuser with encrypted password '123456';
```

- Set privileges

```sql
grant all privileges on database realworld to realworlddbuser;
```

## Configure TypeORM

- [Docs](https://typeorm.io/)
- Install postgres

```sh
yarn add pg
```

- Add config in `ormconfig.ts`

```ts
import { DataSourceOptions } from 'typeorm';

const config: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'realworlddbuser',
  password: '123456',
  database: 'realworld',
};

export default config;
```

- Install bindings between NestJS and TypeORM

```sh
yarn add @nestjs/typeorm
```

- Bind TypeOrm in the `AppModule`

```ts
imports: [TypeOrmModule.forRoot(ormconfig), ..., ],
```

## TypeORM - Entity

- It's a class that maps to a database table

```ts
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tags' })
export class TagEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
```

> Convention
> Table names in databases are plural

- Add these in `ormconfig.ts`

```ts
{
  ...
  entities: [path.join(__dirname, '..', '/**/*.entity{.ts,.js}')],
  synchronize: true, // sync database and create tables on the fly
}
```

## Repository

- It is a pattern about how we get stuffs inside our service
- Repositories are injected withing Services
- It is a special wrapper which helps us to work with databases
- Inject into to service. `tag.service.ts`

```ts
import { TagEntity } from '@app/tag/tag.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TagService {
  constructor(
    @InjectRepository(TagEntity)
    private readonly tagRepository: Repository<TagEntity>,
  ) {}

  async findAll(): Promise<TagEntity[]> {
    return await this.tagRepository.find();
  }
}
```

- Also as it's injected as a dependency, we need to specify it on imports for the `TagModule`. `tag.module.ts`

```ts
import { Module } from '@nestjs/common';
import { TagController } from '@app/tag/tag.controller';
import { TagService } from '@app/tag/tag.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TagEntity } from '@app/tag/tag.entity';

@Module({
  // Note this is TypeOrmModule.forFeature
  imports: [TypeOrmModule.forFeature([TagEntity])],
  controllers: [TagController], // dependency injection
  providers: [TagService],
})
export class TagModule {}
```
