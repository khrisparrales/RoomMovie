export interface MoviesRootObject {
  _id?: string;
  id?: number;
  idimdb?: string;
  idtmdb?: number;
  key?: string;
  movieName?: string;
  description?: string;
  Coll: Coll;
  genre?: Array<string>;
  rate?: number;
  img?: string;
  cover?: string;
  url?: string;
  __v?: number;
}

export interface Coll {
  _id?: string;
  idColl: number;
  imgColl?: string;
  coverColl?: string;
  exist: boolean;
  Collname: string;
}