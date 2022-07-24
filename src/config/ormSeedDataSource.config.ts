import ormconfig from '../config/orm.config';
import * as path from 'path';
import { DataSource } from 'typeorm';

export default new DataSource({
  ...ormconfig,
  migrations: [path.join(__dirname, '..', '/seeds/**/*{.ts,.js}')],
});
