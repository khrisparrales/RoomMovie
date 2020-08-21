import { Component, OnInit } from '@angular/core';
import { Cinema, Movie, MovieSearchResult,Result } from '../../interfaces/interfaces';
import { MoviesService } from "../../services/movies.service";
import { ApiService } from "../../services/api.service";
import { CommonService } from '../../services/common.service';
import { MoviesRootObject,Coll } from "../../interfaces/movies.model" ;
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
//import { DialogService } from '../../services/dialog.service';
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
} from '@angular/material-moment-adapter';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE],
    },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ],
})
export class AddmovieComponent implements OnInit {
  // url: SafeResourceUrl;
  isMobile: boolean = false;
  searching: boolean = false;
  searchTimer = null;
  searchResults: Result[] = [];
  uploadingCover: boolean = false;
  uploadingTicket: boolean = false;
  col: Coll = {
    idColl: null,
    imgColl: 'null',
    coverColl: 'null',
    Collname: 'null',
    exist: false,
  };
  movie: MoviesRootObject = {
    movieName: '',
    Coll: this.col,
    genre: [],
    img: 'http://apicine.osumi.es/cover/def.jpg',
    cover: 'http://apicine.osumi.es/cover/def.jpg',
    url:
      'https://drive.google.com/file/d/1DZ3LworS8tph3WjC5Df_HCwSVlDBtqeX/preview',
  };

  // movie: MoviesRootObject = {

  //   id: null,
  //   idimdb: '',
  //   idtmdb: null,
  //   key: '',
  //   name: '',
  //   description: '',
  //   Coll: this.col,
  //   genre:string [],
  //   rate: null,
  //   img: '',
  //   cover: '',
  //   url: '',

  // };
  sending: boolean = false;
  value = '';
  url: string = this.movie.url;
  urlSafe: SafeResourceUrl;
  constructor(
   // private dialog: DialogService,
    public sanitizer: DomSanitizer,
    private ms: MoviesService,
    private as: ApiService,
    private cs: CommonService
  ) {}

  ngOnInit(): void {
    //  this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.movie.url);
    this.urlSafe = this.safeurl(this.url);
  }
  safeurl(link: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(link);
  }
  onCoverChange(event) {
    let reader = new FileReader();
    if (
      (<HTMLInputElement>event.target).files &&
      (<HTMLInputElement>event.target).files.length > 0
    ) {
      let file = (<HTMLInputElement>event.target).files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        //this.movie.cover = reader.result as string;
        // this.movie.coverStatus = 1;
        (<HTMLInputElement>document.getElementById('cover')).value = '';
      };
    }
  }
  searchMovieStart() {
    // alert('buscar ' + this.movie.name);
    clearTimeout(this.searchTimer);
    this.searchTimer = setTimeout(() => {
      this.searchMovie();
    }, 500);
  }
  searchMovie() {
    if (this.movie.movieName.length < 3) {
      return;
    }
    // this.searchMovieStop();
    // this.searching = true;
    // this.ms.getmovies().subscribe((data) => {
    //   this.searchResults = data;
    // });

    this.searchMovieStop();
    this.searching = true;
    this.as.searchMovie(this.movie.movieName).subscribe((data) => {
      this.searching = false;
      this.searchResults = data.results;
    });
  }

  searchMovieStop() {
    clearTimeout(this.searchTimer);
  }
  closeSearchResults() {
    this.searchResults = [];
  }
  generos: [] = [];
  ge: string[] = [];
  numbers = new Array();
  length = this.numbers.push('w');

  //console.log("new numbers is : " + this.numbers );
  //length = numbers.push(20);
  //console.log("new numbers is : " + numbers );
  selectResult(movieResult: Result) {
    this.movie = {
      movieName: '',
      Coll: this.col,
      genre: [],
    };
    this.as.seleccionar(movieResult.id).subscribe((data) => {
      var ids = data.release_date;
      var str = ids;
      var res = str.replace(/-/g, '');
      console.log('new numbers is : ' + this.numbers);
      this.movie.id = Number(res);
      this.movie.idimdb = data.imdb_id;
      this.movie.idtmdb = data.id;
      this.movie.description = data.overview;
      this.movie.key = encodeURIComponent(data.title);
      this.movie.movieName = data.title;
      for (let index = 0; index < data.genres.length; index++) {
        const element = data.genres[index].name;
        this.movie.genre.push(element);
      }
      this.movie.rate = data.vote_average;
      this.movie.img =
        'https://image.tmdb.org/t/p/w220_and_h330_face' + data.poster_path;
      this.movie.cover =
        'https://image.tmdb.org/t/p/original' + data.backdrop_path;
      this.movie.url =
        'https://drive.google.com/file/d/1DZ3LworS8tph3WjC5Df_HCwSVlDBtqeX/preview';
      //this.movie.genre.push(data.genres.);
      //   data.genres.forEach(function (value) {
      //     console.log(value.name);
      //       this.movie.genre.push(value.name);
      // //     length = this.movie.push(value.name);
      //     //this.ge
      //     // this.movie.genre.push(value.name);
      //   });

      console.log(data);
      console.log(Number(res));
      console.log(data.title);
      if (data.belongs_to_collection != null) {
        // alert("ES NULL");
        //  console.log(data.belongs_to_collection.name);
        this.col.idColl = data.belongs_to_collection.id;
        this.col.exist = true;
        this.col.Collname = data.belongs_to_collection.name;
        this.col.imgColl =
          'https://image.tmdb.org/t/p/w600_and_h900_bestv2' +
          data.belongs_to_collection.poster_path;
        this.col.coverColl =
          'https://image.tmdb.org/t/p/origina' +
          data.belongs_to_collection.backdrop_path;
      } else {
        this.col = {
          idColl: null,
          imgColl: 'null',
          coverColl: 'null',
          Collname: 'null',
          exist: false,
        };
        // this.col.exist = false;
        //  this.col.idColl =null;

        //  this.col.name = null;
        //  this.col.imgColl =
        //    null;
        //  this.col.coverColl =
        //    null;
      }
      this.closeSearchResults();
    });
    //   this.as.selectResult(movieResult.id).subscribe((result) => {
    //     this.movie.name = this.cs.urldecode(result.title);
    //  //   this.movie.cover = this.cs.urldecode(result.poster);
    //     this.movie.coverStatus = 2;
    //    // this.movie.imdbUrl = this.cs.urldecode(result.imdbUrl);

    //     this.closeSearchResults();
    //   });
  }
  addurl() {
    this.urlSafe = this.safeurl(this.movie.url);
    // this.movie.url =
    //   'https://drive.google.com/file/d/1kLxKsTRYKWXYKM0qojuL-eYJv_cNCPxa/preview';
    alert('URL:' + this.movie.url);
  }
  saveMovie() {
    alert("wwww");
    // if (this.movie.movieName == '') {
    //   this.dialog.alert({
    //     title: 'Error',
    //     content: '¡No has introducido el nombre de la película!',
    //     ok: 'Continuar',
    //   });
    //   return;
    // }
  }
  saveload() {
    console.log(this.movie);
    this.as.addmovie(this.movie).subscribe((data) => {
      console.log(data);
    });
  }
  uploadCover() {
    document.getElementById('cover').click();
  }
}
