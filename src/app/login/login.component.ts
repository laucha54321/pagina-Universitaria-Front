import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  error?: string;

  light_theme = false;

  isSignedUp = true;
  wrongPass = false;
  

  constructor(private authService:AuthService, private router:Router){

  }
  onSwitch(){
    this.isSignedUp = !this.isSignedUp;
  }
  
  toggleTheme(){
    this.light_theme = !this.light_theme
  }

  onSubmit(form: NgForm){
    if(this.isSignedUp){
      this.authService.login({
        id:form.value.id_persona,
        contrasena:form.value.contrasena
      }).subscribe(
        responseData=>{
          this.router.navigate(['/'])
          this.error = '';
        },
        resError=>{
          this.error = resError.error
        }
        )
    }else{
      console.log(form)
      this.authService.signUp({
        nombre:form.value.nombre,
        apellido:form.value.apellido,
        contrasena:form.value.contrasena,
        email:form.value.email,
        telefono:form.value.telefono,
        fecha_nacimiento:form.value.fecha_nacimiento
      }).subscribe(responseData=>{
        console.log(responseData)
      })
    }
  }
}
