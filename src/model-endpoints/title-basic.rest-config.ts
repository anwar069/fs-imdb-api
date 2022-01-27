import {ModelCrudRestApiConfig} from '@loopback/rest-crud';
import {TitleBasic} from '../models';

const config: ModelCrudRestApiConfig = {
  model: TitleBasic,
  pattern: 'CrudRest',
  dataSource: 'dev',
  basePath: '/title-basics',
};
module.exports = config;
