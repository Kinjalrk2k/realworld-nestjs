import * as path from 'path';
import { DataSourceOptions } from 'typeorm';

// console.log(path.join(__dirname, '..', '/migrations/**/*.{.ts,.js}'));

const ormconfig: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'realworlddbuser',
  password: '123456',
  database: 'realworld',
  entities: [path.join(__dirname, '..', '/**/*.entity{.ts,.js}')],
  synchronize: false, // sync database and create tables
  migrations: [path.join(__dirname, '..', '/migrations/**/*{.ts,.js}')],
};

export default ormconfig;
