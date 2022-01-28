import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasOneRepositoryFactory, HasManyRepositoryFactory} from '@loopback/repository';
import {DevDataSource} from '../datasources';
import {TitleBasic, TitleBasicRelations, TitleRating, TitlePrincipal, TitleCrew} from '../models';
import {TitleRatingRepository} from './title-rating.repository';
import {TitlePrincipalRepository} from './title-principal.repository';
import {TitleCrewRepository} from './title-crew.repository';

export class TitleBasicRepository extends DefaultCrudRepository<
  TitleBasic,
  typeof TitleBasic.prototype.tid,
  TitleBasicRelations
> {

  public readonly ratings: HasOneRepositoryFactory<TitleRating, typeof TitleBasic.prototype.tid>;

  public readonly principals: HasManyRepositoryFactory<TitlePrincipal, typeof TitleBasic.prototype.tid>;

  public readonly crews: HasManyRepositoryFactory<TitleCrew, typeof TitleBasic.prototype.tid>;

  constructor(
    @inject('datasources.dev') dataSource: DevDataSource, @repository.getter('TitleRatingRepository') protected titleRatingRepositoryGetter: Getter<TitleRatingRepository>, @repository.getter('TitlePrincipalRepository') protected titlePrincipalRepositoryGetter: Getter<TitlePrincipalRepository>, @repository.getter('TitleCrewRepository') protected titleCrewRepositoryGetter: Getter<TitleCrewRepository>,
  ) {
    super(TitleBasic, dataSource);
    this.crews = this.createHasManyRepositoryFactoryFor('crews', titleCrewRepositoryGetter,);
    this.registerInclusionResolver('crews', this.crews.inclusionResolver);
    this.principals = this.createHasManyRepositoryFactoryFor('principals', titlePrincipalRepositoryGetter,);
    this.registerInclusionResolver('principals', this.principals.inclusionResolver);
    this.ratings = this.createHasOneRepositoryFactoryFor('ratings', titleRatingRepositoryGetter);
    this.registerInclusionResolver('ratings', this.ratings.inclusionResolver);
  }
}
