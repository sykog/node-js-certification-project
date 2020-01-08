import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./components/home/home/home.component";
import { LoginComponent } from './Admin/login/login.component';
import { SignupComponent } from './Admin/signup/signup.component';
import { NewsComponent } from './Admin/news/news.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'signup', component: SignupComponent},
  {path:'addNews', component: NewsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
