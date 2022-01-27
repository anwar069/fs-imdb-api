import {ModelCrudRestApiConfig} from '@loopback/rest-crud';
import {TitleRating} from '../models';

const config: ModelCrudRestApiConfig = {
  model: TitleRating,
  pattern: 'CrudRest',
  dataSource: 'dev',
  basePath: '/title-ratings',
};
module.exports = config;
