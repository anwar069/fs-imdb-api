import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DevDataSource} from '../datasources';
import {TitleCrew, TitleCrewRelations} from '../models';

export class TitleCrewRepository extends DefaultCrudRepository<
  TitleCrew,
  typeof TitleCrew.prototype.tconst,
  TitleCrewRelations
> {
  constructor(
    @inject('datasources.dev') dataSource: DevDataSource,
  ) {
    super(TitleCrew, dataSource);
  }
}
