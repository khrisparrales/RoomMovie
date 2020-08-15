import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutangularComponent } from './components/aboutangular/aboutangular.component';
import { MoviesComponent } from './components/movies/movies.component';
import { SeriesComponent } from './components/series/series.component';
import { AddmovieComponent } from "./components/addmovie/addmovie.component";
import { AddseriesComponent } from "./components/addseries/addseries.component";
import { MoviedetailComponent } from "./components/moviedetail/moviedetail.component";

export const routes: Routes = [
         { path: 'aboutangular', component: AboutangularComponent },
         { path: 'movies', component: MoviesComponent },
         { path: 'series', component: SeriesComponent },
         { path: 'addmovie', component: AddmovieComponent },
         { path: 'addseries/:id/:name', component: AddseriesComponent },
         { path: '', redirectTo: '/movies', pathMatch: 'full' },
         {
           path: 'movies/moviesdetail/:id/:key',
           component: MoviedetailComponent,
         },
         {
           path: 'movies/movies/moviesdetail/:id/:key',
           component: MoviedetailComponent,
         },
         { path: '', component: MoviesComponent },
       ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
