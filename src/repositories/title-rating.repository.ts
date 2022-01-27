import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DevDataSource} from '../datasources';
import {TitleRating, TitleRatingRelations} from '../models';

export class TitleRatingRepository extends DefaultCrudRepository<
  TitleRating,
  typeof TitleRating.prototype.tconst,
  TitleRatingRelations
> {
  constructor(
    @inject('datasources.dev') dataSource: DevDataSource,
  ) {
    super(TitleRating, dataSource);
  }
}
