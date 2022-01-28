import {Entity, hasMany, hasOne, model, property} from '@loopback/repository';
import {TitleCrew} from './title-crew.model';
import {TitlePrincipal} from './title-principal.model';
import {TitleRating} from './title-rating.model';

@model({
  settings: {idInjection: false, mysql: {schema: 'fsimdb', table: 'title_basic'}}
})
export class TitleBasic extends Entity {
  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    id: 1,
    mysql: {columnName: 'tid', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  tid: number;

  @property({
    type: 'string',
    length: 15,
    mysql: {columnName: 'tconst', dataType: 'varchar', dataLength: 15, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  tconst?: string;

  @property({
    type: 'string',
    length: 65535,
    mysql: {columnName: 'titleType', dataType: 'text', dataLength: 65535, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  titleType?: string;

  @property({
    type: 'string',
    length: 65535,
    mysql: {columnName: 'primaryTitle', dataType: 'text', dataLength: 65535, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  primaryTitle?: string;

  @property({
    type: 'string',
    length: 65535,
    mysql: {columnName: 'originalTitle', dataType: 'text', dataLength: 65535, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  originalTitle?: string;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'isAdult', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  isAdult?: number;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'startYear', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  startYear?: number;

  @property({
    type: 'string',
    length: 65535,
    mysql: {columnName: 'endYear', dataType: 'text', dataLength: 65535, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  endYear?: string;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'runtimeMinutes', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  runtimeMinutes?: number;

  @property({
    type: 'string',
    length: 65535,
    mysql: {columnName: 'genres', dataType: 'text', dataLength: 65535, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  genres?: string;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'added_by_user', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  addedByUser?: number;

  @hasOne(() => TitleRating,
    {keyFrom: 'tconst', keyTo: 'tconst'})
  ratings: TitleRating;

  @hasMany(() => TitlePrincipal,
    {keyFrom: 'tconst', keyTo: 'tconst'})
  principals: TitlePrincipal[];

  @hasMany(() => TitleCrew,
    {keyFrom: 'tconst', keyTo: 'tconst'})
  crews: TitleCrew[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<TitleBasic>) {
    super(data);
  }
}

export interface TitleBasicRelations {
  // describe navigational properties here
}

export type TitleBasicWithRelations = TitleBasic & TitleBasicRelations;
