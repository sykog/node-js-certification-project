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
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}