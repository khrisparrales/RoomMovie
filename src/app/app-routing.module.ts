import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutangularComponent } from './components/aboutangular/aboutangular.component';
import { MoviesComponent } from './components/movies/movies.component';
import { SeriesComponent } from './components/series/series.component';
import { AddmovieComponent } from "./components/addmovie/addmovie.component";
import { AddseriesComponent } from "./components/addseries/addseries.component";
import { MoviedetailComponent } from "./components/moviedetail/moviedetail.component";
import { LogindbComponent } from "./components/logindb/logindb.component";
import { DeletemovieComponent } from "./components/deletemovie/deletemovie.component";
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
         { path: 'deletemovie', component: DeletemovieComponent },
         //  { path: 'aboutangular', component: AboutangularComponent },
         { path: 'movies', component: MoviesComponent },
         { path: 'series', component: SeriesComponent },
         {
           path: 'addmovie',
           component: AddmovieComponent,
           canActivate: [AuthGuard],
         },
         { path: 'login', component: LogindbComponent },
         //  { path: 'addseries/:id/:name', component: AddseriesComponent },
         { path: '', redirectTo: '/movies', pathMatch: 'full' },
         {
           path: 'moviesdetail/:id/:key',
           component: MoviedetailComponent,
         },
         {
           path: 'signin',
           component: LogindbComponent,
         },
         //  {
         //    path: 'movies/movies/moviesdetail/:id/:key',
         //    component: MoviedetailComponent,
         //  },
         { path: '', redirectTo: '/movies', pathMatch: 'full' },
       ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
