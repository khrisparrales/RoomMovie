import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule,routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutangularComponent } from './components/aboutangular/aboutangular.component';
import { MoviesComponent } from './components/movies/movies.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SeriesComponent } from './components/series/series.component';
import { HttpClientModule } from '@angular/common/http';
import { AddmovieComponent } from './components/addmovie/addmovie.component';
import { AddseriesComponent } from './components/addseries/addseries.component';
import { NopageComponent } from './components/nopage/nopage.component';
import { MoviedetailComponent } from './components/moviedetail/moviedetail.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutangularComponent,
    MoviesComponent,
    SidebarComponent,
    SeriesComponent,
    AddmovieComponent,
    AddseriesComponent,
    NopageComponent,
    MoviedetailComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true }),

    HttpClientModule,
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}