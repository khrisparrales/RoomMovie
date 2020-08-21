import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { filter } from 'rxjs/operators';
import { MoviesService } from "../../services/movies.service";
import { MoviesRootObject } from "../../interfaces/movies.model";
import { Genre } from '../../models/genre.model';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  constructor(private moviesservice: MoviesService) {}
  movies: MoviesRootObject[] = null;
  public genres = Genre;
  searchText: any = '';
  sortBy: any = 'id';
  ngOnInit() {
    // this.movies = this.moviesservice.getmovies();
    this.moviesservice.getmovies().subscribe((movies) => {
      this.movies = movies;
      //   this.applyFilter(this.selectedGenre);
    });
    // this.moviesservice.getmovies()
    //.subscribe((resp:MoviesRootObject[])=>{
    //   console.log('movies ',resp);
    //  // alert(resp);
    //  this.movies=resp;
    // });
  }
}
