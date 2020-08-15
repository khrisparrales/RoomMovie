export interface MoviesRootObject {
  _id: string;
  id: number;
  idimdb: string;
  idtmdb: number;
  key: string;
  name: string;
  description: string;
  Coll: Coll;
  genre: string;
  rate: number;
  img: string;
  cover: string;
  url: string;
  __v: number;
}

export interface Coll {
  _id: string;
  idColl: number;
  imgColl: string;
  coverColl: string;
  exist: boolean;
}