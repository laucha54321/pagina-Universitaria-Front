import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursoComponent } from './curso/curso.component';
import { HomeComponent } from './home/home.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth/auth.component';
const routes: Routes = [
  { path: 'curso', component: CursoComponent },
  { path: 'registro', component:RegistroComponent},
  { path: 'login', component:LoginComponent},
  { path: 'login1', component:AuthComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
