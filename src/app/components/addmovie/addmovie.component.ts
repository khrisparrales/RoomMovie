import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.scss'],
})
export class AddmovieComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
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
}
