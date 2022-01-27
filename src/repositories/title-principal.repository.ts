import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DevDataSource} from '../datasources';
import {TitlePrincipal, TitlePrincipalRelations} from '../models';

export class TitlePrincipalRepository extends DefaultCrudRepository<
  TitlePrincipal,
  typeof TitlePrincipal.prototype.tconst,
  TitlePrincipalRelations
> {
  constructor(
    @inject('datasources.dev') dataSource: DevDataSource,
  ) {
    super(TitlePrincipal, dataSource);
  }
}
