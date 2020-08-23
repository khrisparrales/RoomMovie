import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {
  LoginData,
  LoginResult,
  RegisterData,
  MoviesResult,
  CinemasResult,
  StatusResult,
  Cinema,
  MovieSearchResultList,
  MovieSearchDetailResult,
  TMDBRootObject,
  TMDBIDRootObject,
  Result,
  Movie,
  MovieResult,
  CinemaResult,
} from '../interfaces/interfaces';
import { MoviesRootObject,Coll } from "../interfaces/movies.model";
import { RouterOutlet } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  apiUrl: 'https://apicine.osumi.es/api/';
  // searchMovie(q: string){
  //   // return this.http.post<MovieSearchResultList>(
  //   //   'https://apicine.osumi.es/api/' + 'search-movie',
  //   //   {
  //   //     q,
  //   //   }
  //   // );
  //    return this.http.get(
  //      'https://api.themoviedb.org/3/search/movie?api_key=2ec9323401793e5a207687ea4612d147&language=es&query=' +
  //        q
  //    );

  // }
  searchMovie(q: string): Observable<TMDBRootObject> {
    return this.http.get<TMDBRootObject>(
      'https://api.themoviedb.org/3/search/movie?api_key=2ec9323401793e5a207687ea4612d147&language=es&query=' +
        q
    );
  }
  seleccionar(id: number): Observable<TMDBIDRootObject> {
    return this.http.get<TMDBIDRootObject>(
      'https://api.themoviedb.org/3/movie/' +
        id +
        '?api_key=2ec9323401793e5a207687ea4612d147&language=es-MX'
    );
  }
  addmovie(pelicula: MoviesRootObject): Observable<MoviesRootObject> {
    return this.http.post<MoviesRootObject>(
      'https://apiroommovie.herokuapp.com/api/movies',
      {
        id: pelicula.id,
        idimdb: pelicula.idimdb,
        idtmdb: pelicula.idtmdb,
      //  key: 'Batman%20inicia',
      key:"Batman%3A%20El%20caballero%20de%20la%20noche%20asciende",
        movieName: pelicula.movieName,
        description: pelicula.description,
        idColl: pelicula.Coll.idColl,
        CollName: pelicula.Coll.Collname,
        imgColl: pelicula.Coll.imgColl,
        coverColl: pelicula.Coll.coverColl,
        exist: pelicula.Coll.exist,
        genre: pelicula.genre,
        rate: pelicula.rate,
        img: pelicula.img,
        cover: pelicula.cover,
        url: pelicula.url,
      }
    );
  }

  // selectResult(id: number): Observable<MovieSearchDetailResult> {
  //   return this.http.post<MovieSearchDetailResult>(
  //     this.apiUrl + 'select-result',
  //     { id }
  //   );
  // }
  // selectResult(id: number): Observable<TMDBIDRootObject> {
  //   return this.http.get<TMDBIDRootObject>(
  //     'https://api.themoviedb.org/3/movie/'+id+'?api_key=2ec9323401793e5a207687ea4612d147&language=es-MX' +
  //       'select-result'

  //   );
  // }
}
