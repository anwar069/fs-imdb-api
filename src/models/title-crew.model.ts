import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mysql: {schema: 'fsimdb', table: 'title_crew'}}})
export class TitleCrew extends Entity {
  @property({
    type: 'string',
    required: true,
    length: 15,
    id: 1,
    mysql: {columnName: 'tconst', dataType: 'varchar', dataLength: 15, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  tconst: string;

  @property({
    type: 'string',
    length: 65535,
    mysql: {columnName: 'directors', dataType: 'text', dataLength: 65535, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  directors?: string;

  @property({
    type: 'string',
    length: 65535,
    mysql: {columnName: 'writers', dataType: 'text', dataLength: 65535, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  writers?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<TitleCrew>) {
    super(data);
  }
}

export interface TitleCrewRelations {
  // describe navigational properties here
}

export type TitleCrewWithRelations = TitleCrew & TitleCrewRelations;
