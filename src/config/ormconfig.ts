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
  synchronize: true, // sync database and create tables
};

export default ormconfig;
