import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./components/home/home/home.component";
import { LoginComponent } from './Admin/login/login.component';
import { SignupComponent } from './Admin/signup/signup.component';
import { AddNewsComponent } from './Admin/add-news/add-news.component';
import {AboutComponent} from "./components/about/about/about.component";
import {ContactComponent} from "./components/contact/contact.component";
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SportsComponent } from './components/sports/sports.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'signup', component: SignupComponent},
  {path:'addNews', component:AddNewsComponent},
  {path:'about-us', component: AboutComponent},
  {path:'contact-us', component: ContactComponent},
  {path: 'sports', component: SportsComponent},
  {path:'**',component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
