import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

// Rutas
import { appRouting } from './app.routes';
import { RouterModule, ROUTES } from '@angular/router';
import { NoimagePipe } from './pipes/noimage.pipe';

import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { DomSeguroPipe } from './pipes/dom-seguro.pipe';


// Services




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavbarComponent,
    NoimagePipe,
    TarjetasComponent,
    LoadingComponent,
    DomSeguroPipe
   
  ],
  imports: [
    BrowserModule,
    appRouting,
    HttpClientModule
   
  ],
  providers: [
     
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
