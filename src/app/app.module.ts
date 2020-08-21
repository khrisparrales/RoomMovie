import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

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
import { EnumToArrayPipe } from './pipes/enum-to-array.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogindbComponent } from './components/logindb/logindb.component';
// import { MatButtonModule } from '@angular/material/button';
// import { MatSliderModule } from '@angular/material/slider';
import {  MATERIAL } from './app.common';
import { UrldecodePipe } from './pipes/urldecode.pipe';
// import { ConfirmDialogComponent } from './components/dialogs/confirm-dialog/confirm-dialog.component';
// import { AlertDialogComponent } from './components/dialogs/alert-dialog/alert-dialog.component';
// import { FormDialogComponent } from './components/dialogs/form-dialog/form-dialog.component';

@NgModule({
  declarations: [
   // ConfirmDialogComponent,
   // AlertDialogComponent,
  //  FormDialogComponent,
    AppComponent,
    AboutangularComponent,
    MoviesComponent,
    SidebarComponent,
    SeriesComponent,
    AddmovieComponent,
    AddseriesComponent,
    NopageComponent,
    MoviedetailComponent,
    EnumToArrayPipe,
    LogindbComponent,
    UrldecodePipe,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true }),

    HttpClientModule,
    FormsModule,

    BrowserAnimationsModule,
    ...MATERIAL,
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
