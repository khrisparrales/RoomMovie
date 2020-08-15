import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutangularComponent } from './components/aboutangular/aboutangular.component';
import { MoviesComponent } from './components/movies/movies.component';
import { SeriesComponent } from './components/series/series.component';
import { AddmovieComponent } from "./components/addmovie/addmovie.component";
import { AddseriesComponent } from "./components/addseries/addseries.component";

export const routes: Routes = [
  { path: 'aboutangular', component: AboutangularComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'series', component: SeriesComponent },
  { path: 'addmovie', component: AddmovieComponent },
  { path: 'addseries/:id/:name', component: AddseriesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
