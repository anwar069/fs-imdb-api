import {ModelCrudRestApiConfig} from '@loopback/rest-crud';
import {TitleCrew} from '../models';

const config: ModelCrudRestApiConfig = {
  model: TitleCrew,
  pattern: 'CrudRest',
  dataSource: 'dev',
  basePath: '/title-crews',
};
module.exports = config;
