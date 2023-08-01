import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor (private http: HttpClient){

  }

  onSubmit(form: NgForm){
    this.http.post('http://127.0.0.1:3080/login',
    {
      "id":form.value.id_persona,
      "contrasena":form.value.contrasena
    }).subscribe(responseData =>{
      console.log(responseData)
    })
  }
}
