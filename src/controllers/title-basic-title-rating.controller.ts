import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  TitleBasic,
  TitleRating,
} from '../models';
import {TitleBasicRepository} from '../repositories';

export class TitleBasicTitleRatingController {
  constructor(
    @repository(TitleBasicRepository) protected titleBasicRepository: TitleBasicRepository,
  ) { }

  @get('/title-basics/{id}/title-rating', {
    responses: {
      '200': {
        description: 'TitleBasic has one TitleRating',
        content: {
          'application/json': {
            schema: getModelSchemaRef(TitleRating),
          },
        },
      },
    },
  })
  async get(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<TitleRating>,
  ): Promise<TitleRating> {
    return this.titleBasicRepository.ratings(id).get(filter);
  }

  @post('/title-basics/{id}/title-rating', {
    responses: {
      '200': {
        description: 'TitleBasic model instance',
        content: {'application/json': {schema: getModelSchemaRef(TitleRating)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof TitleBasic.prototype.tid,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TitleRating, {
            title: 'NewTitleRatingInTitleBasic',
            exclude: ['tconst'],
            optional: ['titleBasicId']
          }),
        },
      },
    }) titleRating: Omit<TitleRating, 'tconst'>,
  ): Promise<TitleRating> {
    return this.titleBasicRepository.ratings(id).create(titleRating);
  }

  @patch('/title-basics/{id}/title-rating', {
    responses: {
      '200': {
        description: 'TitleBasic.TitleRating PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TitleRating, {partial: true}),
        },
      },
    })
    titleRating: Partial<TitleRating>,
    @param.query.object('where', getWhereSchemaFor(TitleRating)) where?: Where<TitleRating>,
  ): Promise<Count> {
    return this.titleBasicRepository.ratings(id).patch(titleRating, where);
  }

  @del('/title-basics/{id}/title-rating', {
    responses: {
      '200': {
        description: 'TitleBasic.TitleRating DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(TitleRating)) where?: Where<TitleRating>,
  ): Promise<Count> {
    return this.titleBasicRepository.ratings(id).delete(where);
  }
}
