import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { LocationComponent } from './components/location/location.component';
import { FooterComponent } from './components/footer/footer.component';
import { GoToTopComponent } from './components/go-to-top/go-to-top.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CarruselComponent,
    GalleryComponent,
    PricingComponent,
    LocationComponent,
    FooterComponent,
    GoToTopComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
