import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LocationComponent } from './pages/location/location.component';
import { AboutComponent } from './pages/about/about.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BanoComponent } from './pages/bano/bano.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LocationComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    BanoComponent,
    ServiciosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
