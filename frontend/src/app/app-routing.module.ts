import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./home/home/home.component";
import { LoginComponent } from './Admin/login/login.component';
import {AboutComponent} from "./about/about/about.component";
import {ContactComponent} from "./contact/contact.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'about-us', component: AboutComponent},
  {path:'contact-us', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
