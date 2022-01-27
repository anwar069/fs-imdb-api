import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DevDataSource} from '../datasources';
import {TitleBasic, TitleBasicRelations} from '../models';

export class TitleBasicRepository extends DefaultCrudRepository<
  TitleBasic,
  typeof TitleBasic.prototype.tid,
  TitleBasicRelations
> {
  constructor(
    @inject('datasources.dev') dataSource: DevDataSource,
  ) {
    super(TitleBasic, dataSource);
  }
}
