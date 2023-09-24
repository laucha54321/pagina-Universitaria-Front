import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursoComponent } from './curso/curso.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CalificacionesComponent } from './calificaciones/calificaciones.component';
import { AuthGuard } from './auth/auth.guard';
import { CalificacionesProfesorComponent } from './calificaciones-profesor/calificaciones-profesor.component';
const routes: Routes = [
  { 
    path: 'curso',
    component: CursoComponent,
  },
  { path: 'login', component:LoginComponent },
  { 
    path: 'calificaciones',
    component: CalificacionesComponent,
  },
  {path: 'calificaciones/profesor', component:CalificacionesProfesorComponent},
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
