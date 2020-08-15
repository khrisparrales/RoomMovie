import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  urlroommovies = 'https://apiroommovie.herokuapp.com/api/';
  constructor(private http: HttpClient) {}
  getmovies() {
    return this.http.get(this.urlroommovies+'movies');
  }
}
