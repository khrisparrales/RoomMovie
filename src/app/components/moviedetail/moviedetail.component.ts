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
  url: string = 'https://www.mmlpqtpkasjdashdjahd.com';
  urlSafe: SafeResourceUrl;
  error: string = null;
  htmlSnippet = 'Template <script>alert("0wned")</script> <b>Syntax</b>';
  // youtubeVideoLink: any = 'https://youtube.com/embed/GjGcytpSDTw';
  youtubeVideoLink: any = '1qGSfurRqOlkruxoTB0ov71dyI0u6HjQf/view';
  dangerousVideoUrl: string;
  videoUrl: SafeResourceUrl;
  htmlStr: string =
    '<iframe src="https://drive.google.com/file/d/1qGSfurRqOlkruxoTB0ov71dyI0u6HjQf/preview" width="640" height="480"></iframe>';
  constructor(
    public sanitizer: DomSanitizer,
    private activatedRoute: ActivatedRoute,
    private movieservice: MoviesService
  ) {
    this.updateVideoUrl();
  }

  ngOnInit() {
    const { id } = this.activatedRoute.snapshot.params;
      const { key } = this.activatedRoute.snapshot.params;
   //  alert(key)
    this.getMovie(id);

    // this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(
    //   this.movie.url
    // );
  }
  updateVideoUrl() {
    // Appending an ID to a YouTube URL is safe.
    // Always make sure to construct SafeValue objects as
    // close as possible to the input data so
    // that it's easier to check if the value is safe.
    this.dangerousVideoUrl =
      'https://drive.google.com/file/d/1qGSfurRqOlkruxoTB0ov71dyI0u6HjQf/preview';
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.dangerousVideoUrl
    );
  }
  getLink() {
    return 'https://drive.google.com/file/d/1qGSfurRqOlkruxoTB0ov71dyI0u6HjQf/preview';
    // return this.sanitizer.bypassSecurityTrustResourceUrl(this.youtubeVideoLink);
  }
  getMovie(id: string) {
    this.movieservice.getmovieid(id).subscribe(
      (data) => {
        this.movie = data;
        this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(
          this.movie.url
        );
      },
      (err) => (this.error = err)
    );
  }
}
