import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MoviesRootObject } from "../interfaces/movies.model";
// RxJs
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { catchError, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  urlroommovies = 'https://apiroommovie.herokuapp.com/api/';
  constructor(private http: HttpClient) {}
  // getmovies() {
  //   return this.http.get<MoviesRootObject>(this.urlroommovies + 'movies');
  // }
  private moviesEndpoint = 'https://apiroommovie.herokuapp.com/api/movies';
  getmovies() {
    return this.http.get(this.urlroommovies + 'movies').pipe(tap(console.log));
  }
  // getmovieid(id:string){
  //    return this.http.get(this.urlroommovies + 'movies'+'/'+id).pipe(tap(console.log));
  // }
  getmovieid(id: string): Observable<MoviesRootObject> {
    const url = `${this.moviesEndpoint}/${id}`;
    return this.http.get<MoviesRootObject>(url).pipe(
      tap((_) => console.log(`fetched movie with id=${id}`)),
      catchError(this.handleError<MoviesRootObject>(`getMovie id=${id}`))
    );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
