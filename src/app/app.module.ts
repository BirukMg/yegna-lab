import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { ProductsPageComponent } from './components/products-page/products-page.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { LandingComponent } from './components/landing/landing.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HighlightComponent } from './components/highlight/highlight.component';
import { HomeBodyComponent } from './components/home-body/home-body.component';
import { HomeBodySectionComponent } from './components/home-body-section/home-body-section.component';
import { OurClientComponent } from './components/our-client/our-client.component';
import { MembersComponent } from './components/members/members.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsPageComponent,
    ProductCardComponent,
    LandingComponent,
    HighlightComponent,
    HomeBodyComponent,
    HomeBodySectionComponent,
    OurClientComponent,
    MembersComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
