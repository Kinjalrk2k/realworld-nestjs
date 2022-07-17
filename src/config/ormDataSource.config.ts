import ormconfig from '@app/config/orm.config';
import { DataSource } from 'typeorm';

export default new DataSource(ormconfig);
