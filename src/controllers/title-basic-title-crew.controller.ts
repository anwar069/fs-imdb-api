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
  TitleCrew,
} from '../models';
import {TitleBasicRepository} from '../repositories';

export class TitleBasicTitleCrewController {
  constructor(
    @repository(TitleBasicRepository) protected titleBasicRepository: TitleBasicRepository,
  ) { }

  @get('/title-basics/{id}/title-crews', {
    responses: {
      '200': {
        description: 'Array of TitleBasic has many TitleCrew',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(TitleCrew)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<TitleCrew>,
  ): Promise<TitleCrew[]> {
    return this.titleBasicRepository.crews(id).find(filter);
  }

  @post('/title-basics/{id}/title-crews', {
    responses: {
      '200': {
        description: 'TitleBasic model instance',
        content: {'application/json': {schema: getModelSchemaRef(TitleCrew)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof TitleBasic.prototype.tid,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TitleCrew, {
            title: 'NewTitleCrewInTitleBasic',
            exclude: ['tconst'],
            optional: ['titleBasicId']
          }),
        },
      },
    }) titleCrew: Omit<TitleCrew, 'tconst'>,
  ): Promise<TitleCrew> {
    return this.titleBasicRepository.crews(id).create(titleCrew);
  }

  @patch('/title-basics/{id}/title-crews', {
    responses: {
      '200': {
        description: 'TitleBasic.TitleCrew PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TitleCrew, {partial: true}),
        },
      },
    })
    titleCrew: Partial<TitleCrew>,
    @param.query.object('where', getWhereSchemaFor(TitleCrew)) where?: Where<TitleCrew>,
  ): Promise<Count> {
    return this.titleBasicRepository.crews(id).patch(titleCrew, where);
  }

  @del('/title-basics/{id}/title-crews', {
    responses: {
      '200': {
        description: 'TitleBasic.TitleCrew DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(TitleCrew)) where?: Where<TitleCrew>,
  ): Promise<Count> {
    return this.titleBasicRepository.crews(id).delete(where);
  }
}
