import {ModelCrudRestApiConfig} from '@loopback/rest-crud';
import {TitlePrincipal} from '../models';

const config: ModelCrudRestApiConfig = {
  model: TitlePrincipal,
  pattern: 'CrudRest',
  dataSource: 'dev',
  basePath: '/title-principals',
};
module.exports = config;
