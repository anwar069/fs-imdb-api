import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'fsimdb', table: 'title_principal'}}
})
export class TitlePrincipal extends Entity {
  @property({
    type: 'string',
    required: true,
    length: 15,
    id: 1,
    mysql: {columnName: 'tconst', dataType: 'varchar', dataLength: 15, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  tconst: string;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'ordering', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  ordering?: number;

  @property({
    type: 'string',
    length: 65535,
    mysql: {columnName: 'nconst', dataType: 'text', dataLength: 65535, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  nconst?: string;

  @property({
    type: 'string',
    length: 65535,
    mysql: {columnName: 'category', dataType: 'text', dataLength: 65535, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  category?: string;

  @property({
    type: 'string',
    length: 65535,
    mysql: {columnName: 'job', dataType: 'text', dataLength: 65535, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  job?: string;

  @property({
    type: 'string',
    length: 65535,
    mysql: {columnName: 'characters', dataType: 'text', dataLength: 65535, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  characters?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<TitlePrincipal>) {
    super(data);
  }
}

export interface TitlePrincipalRelations {
  // describe navigational properties here
}

export type TitlePrincipalWithRelations = TitlePrincipal & TitlePrincipalRelations;
