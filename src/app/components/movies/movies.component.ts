import { Component, OnInit } from '@angular/core';
import { MoviesService } from "../../services/movies.service";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  constructor(private moviesservice:MoviesService) { }

  ngOnInit() {
    this.moviesservice.getmovies().subscribe(resp=>{
      console.log('movies ',resp);
      alert(resp);
    });
  }

}
