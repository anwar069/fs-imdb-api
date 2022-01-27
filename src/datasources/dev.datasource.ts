import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'dev',
  connector: 'mysql',
  url: 'mysql://fsdev:yYkX2PldEsspYSUVVR8ud575z8OjoLGxz2AVXtxl@fullstack.ciuvn6ai8cub.ap-south-1.rds.amazonaws.com/fsimdb',
  host: 'fullstack.ciuvn6ai8cub.ap-south-1.rds.amazonaws.com',
  port: 3306,
  user: 'fsdev',
  password: 'yYkX2PldEsspYSUVVR8ud575z8OjoLGxz2AVXtxl',
  database: 'fsimdb'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class DevDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'dev';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.dev', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
