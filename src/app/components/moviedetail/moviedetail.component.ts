import { Component, OnInit,Input  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from "../../services/movies.service";
import { MoviesRootObject } from "../../interfaces/movies.model";
import {DomSanitizer,SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-moviedetail',
  templateUrl: './moviedetail.component.html',
  styleUrls: ['./moviedetail.component.scss'],
})
export class MoviedetailComponent implements OnInit {
 @Input()
  movie: MoviesRootObject = null;
  urlSafe: SafeResourceUrl;
  error: string = null;


  constructor(private activatedRoute: ActivatedRoute,private movieservice:MoviesService,public sanitizer:DomSanitizer) {}

  ngOnInit() {
    const { id } = this.activatedRoute.snapshot.params;
    
    this.getMovie(id);
  }
   getMovie(id: string) {

    this.movieservice.getmovieid(id)
    .subscribe(
      data => {
        this.movie = data ;


        this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.movie.url);
    },
      err => this.error = err
    );}
}
