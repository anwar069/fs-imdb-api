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
  TitlePrincipal,
} from '../models';
import {TitleBasicRepository} from '../repositories';

export class TitleBasicTitlePrincipalController {
  constructor(
    @repository(TitleBasicRepository) protected titleBasicRepository: TitleBasicRepository,
  ) { }

  @get('/title-basics/{id}/title-principals', {
    responses: {
      '200': {
        description: 'Array of TitleBasic has many TitlePrincipal',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(TitlePrincipal)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<TitlePrincipal>,
  ): Promise<TitlePrincipal[]> {
    return this.titleBasicRepository.principals(id).find(filter);
  }

  @post('/title-basics/{id}/title-principals', {
    responses: {
      '200': {
        description: 'TitleBasic model instance',
        content: {'application/json': {schema: getModelSchemaRef(TitlePrincipal)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof TitleBasic.prototype.tid,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TitlePrincipal, {
            title: 'NewTitlePrincipalInTitleBasic',
            exclude: ['tconst'],
            optional: ['titleBasicId']
          }),
        },
      },
    }) titlePrincipal: Omit<TitlePrincipal, 'tconst'>,
  ): Promise<TitlePrincipal> {
    return this.titleBasicRepository.principals(id).create(titlePrincipal);
  }

  @patch('/title-basics/{id}/title-principals', {
    responses: {
      '200': {
        description: 'TitleBasic.TitlePrincipal PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TitlePrincipal, {partial: true}),
        },
      },
    })
    titlePrincipal: Partial<TitlePrincipal>,
    @param.query.object('where', getWhereSchemaFor(TitlePrincipal)) where?: Where<TitlePrincipal>,
  ): Promise<Count> {
    return this.titleBasicRepository.principals(id).patch(titlePrincipal, where);
  }

  @del('/title-basics/{id}/title-principals', {
    responses: {
      '200': {
        description: 'TitleBasic.TitlePrincipal DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(TitlePrincipal)) where?: Where<TitlePrincipal>,
  ): Promise<Count> {
    return this.titleBasicRepository.principals(id).delete(where);
  }
}
