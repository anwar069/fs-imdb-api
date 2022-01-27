import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'fsimdb', table: 'title_rating'}}
})
export class TitleRating extends Entity {
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
    precision: 22,
    mysql: {columnName: 'averageRating', dataType: 'double', dataLength: null, dataPrecision: 22, dataScale: null, nullable: 'Y'},
  })
  averageRating?: number;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mysql: {columnName: 'numVotes', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'Y'},
  })
  numVotes?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<TitleRating>) {
    super(data);
  }
}

export interface TitleRatingRelations {
  // describe navigational properties here
}

export type TitleRatingWithRelations = TitleRating & TitleRatingRelations;
