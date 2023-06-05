import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { AboutComponent } from './pages/about/about.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { SuccessfulComponent } from './pages/successful/successful.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'courses', component:CoursesComponent},
  {path: 'about', component:AboutComponent},
  {path: 'login', component:LoginComponent},
  {path: 'login/:id', component:SuccessfulComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'register/:id', component:SuccessfulComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
