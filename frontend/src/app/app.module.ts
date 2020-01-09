import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home/home.component';
import { WeatherComponent } from './components/home/weather/weather.component';
import { LoginComponent } from './Admin/login/login.component';
import { SignupComponent } from './Admin/signup/signup.component';
import { HeaderComponent } from 'src/app/components/shared/header/header.component'
import { FooterComponent } from 'src/app/components/shared/footer/footer.component';
import { ImageSliderComponent } from './components/image-slider/image-slider.component';
import { NewsComponent } from './components/news/news.component';
import { AddNewsComponent } from './Admin/add-news/add-news.component';
import {ChatboxComponent} from "./components/home/chatbox/chatbox.component";
import {ContactComponent} from "./components/contact/contact.component";
import {AboutComponent} from "./components/about/about/about.component";
import {MapComponent} from "./components/about/map/map.component";
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SportsComponent } from './components/sports/sports.component';
import { DisplayNewsComponent } from './Admin/display-news/display-news.component';
import { EditNewsComponent } from './Admin/edit-news/edit-news.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WeatherComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    FooterComponent,
    ImageSliderComponent,
    NewsComponent,
    AddNewsComponent,
    ChatboxComponent,
    ContactComponent,
    AboutComponent,
    MapComponent,
    PageNotFoundComponent,
    SportsComponent,
    DisplayNewsComponent,
    EditNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
