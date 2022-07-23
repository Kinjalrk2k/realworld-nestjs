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

## Migrations

- `synchronize: true` is BAD.
  - It might break in production
  - Also other frameworkds do not have this
- Migrations give a lot of power
- Create a DataSource config. `config/ormDataSource.config.ts`

```ts
import ormconfig from '@app/config/orm.config';
import { DataSource } from 'typeorm';

export default new DataSource(ormconfig);
```

- Set `typeorm` and related scripts in the `package.json`

```json
{
  "typeorm": "ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js -d ./src/config/ormDataSource.config.ts",
  "db:drop": "yarn typeorm schema:drop"
}
```

- Update `config/orm.config.ts`

```diff
import * as path from 'path';
import { DataSourceOptions } from 'typeorm';

const ormconfig: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'realworlddbuser',
  password: '123456',
  database: 'realworld',
  entities: [path.join(__dirname, '..', '/**/*.entity{.ts,.js}')],
- synchronize: false, // sync database and create tables
+ synchronize: false, // sync database and create tables
+ migrations: [path.join(__dirname, '..', '/migrations/**/*{.ts,.js}')],
};

export default ormconfig;
```

- To generate a migration (Note: need to enter path of the migration and name within it, but do not inlude `.ts` on the end)

```sh
yarn typeorm migration:generate ./src/migrations/CreateTags
```

- To run the migration

```sh
yarn typeorm migration:run
```

## DTO

- Data Transfer Object
- Requests have payloads. These are DTOs in NestJS
- DTOs are useful for validations
- They are class and not interfaces
  - This is because, interfaces are just types. They're not available under the runtime JavaScript. But classes are available
- To get body from a request, we can use the `@Body` decorator
- Properties in a DTO are generally `readonly`. This is because these are request payloads, and we shouldn't be changing those anytime

## Validations

- Install the dependencies: `class-validator` and `class-transformer`
- Use the following decorator on he controller

```ts
@UsePipes(new ValidationPipe())
```

- ValidationPipes work with DTOs
- Update the DTO

```ts
import { IsNotEmpty, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  readonly username: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  readonly password: string;
}
```

## Middlewares

> Middlewares should be `Injectable`

- Middlewares can be defined under any module level, while be used globally or in any other module
- To use a middleware, we need to register it in a module
- Register middleware in a module

```ts
@Module({
  imports: [TypeOrmModule.forRoot(ormconfig), TagModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes({
      path: '*',
      method: RequestMethod.ALL,
    });
  }
}
```

- To use a service outside a module, we'll need to export it in the module

```diff
@Module({
  imports: [TypeOrmModule.forFeature([UserEnitity])],
  controllers: [UserController],
  providers: [UserService],
+ exports: [UserService],
})
export class UserModule {}
```

- Authentication Middleware

```ts
import { ExpressRequest } from '@app/types/ExpressRequest.interface';
import { UserJwtPayload } from '@app/user/types/UserJwtPayload.interface';
import { UserService } from '@app/user/user.service';
import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly userService: UserService) {}

  async use(req: ExpressRequest, _: Response, next: NextFunction) {
    if (!req.headers.authorization) {
      req.user = null;
      next();
      return;
    }

    const token = req.headers.authorization.split(' ')[1];
    try {
      const decode = verify(token, process.env.JWT_SECRET) as UserJwtPayload;
      const user = await this.userService.findById(decode.id);
      req.user = user;
      next();
    } catch (err) {
      req.user = null;
      next();
    }
  }
}
```

## Custom decorator

- Sugaring on params

```ts
import { ExpressRequest } from '@app/types/ExpressRequest.interface';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const User = createParamDecorator((data: any, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest<ExpressRequest>();

  if (!request.user) {
    return null;
  }

  if (data) {
    return request.user[data];
  }

  return request.user;
});
```

- In the controller

```ts

  @Get('user')
  async currentUser(
    @Req() request: ExpressRequest,
    @User() user: UserEnitity,
  ): Promise<UserResponseInterface> {
    console.log('user', user);

    return this.userService.buildUserResponse(request.user);
  }
```

## Gaurds

> Guards should be `Injectable`

- Guards are called after middleware
- Returns boolean. `true` = We've access. `false` = We dont have access

```ts
import { ExpressRequest } from '@app/types/ExpressRequest.interface';
import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<ExpressRequest>();

    if (request.user) {
      return true;
    }

    throw new HttpException('Not authorized', HttpStatus.UNAUTHORIZED);
  }
}
```

- We must register it to every module we're using this. Add it to the `provider` list in the module
- Next, we should use the Guard in the controller

```diff
  @Get('user')
+ @UseGuards(AuthGuard)
  async currentUser(@User() user: UserEnitity): Promise<UserResponseInterface> {
    return this.userService.buildUserResponse(user);
  }
```

# Additional Notes

### Hash Passwords in Entity

```ts
import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { hash } from 'bcrypt';

@Entity({ name: 'users' })
export class UserEnitity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column({ default: '' })
  bio: string;

  @Column({ default: '' })
  image: string;

  @Column()
  password: string;

  @BeforeInsert()
  async hashPassword() {
    this.password = await hash(this.password, 10);
  }
}
```

### Create row using TypeORM

```ts
async createUser(createUserDto: CreateUserDto): Promise<UserEnitity> {
    const newUser = new UserEnitity();
    Object.assign(newUser, createUserDto);
    return await this.userRepository.save(newUser);
  }
```

### Error propagation

```ts
if (userByEmail || userByUsername) {
  throw new HttpException(
    'Email or username is already taken',
    HttpStatus.UNPROCESSABLE_ENTITY,
  );
}
```
