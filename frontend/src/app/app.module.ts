import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";


import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home/home.component';
import { WeatherComponent } from './home/weather/weather.component';
import {ChatboxComponent} from "./home/chatbox/chatbox.component";

import { LoginComponent } from './Admin/login/login.component';
import { SignupComponent } from './Admin/signup/signup.component';

import { HeaderComponent } from 'src/app/components/shared/header/header.component'
import { FooterComponent } from 'src/app/components/shared/footer/footer.component';
import { AboutComponent } from './about/about/about.component';
import { MapComponent } from './about/map/map.component';
import { ContactComponent } from './contact/contact.component'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WeatherComponent,
    ChatboxComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    MapComponent,
    ContactComponent
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
