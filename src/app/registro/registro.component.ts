import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  constructor (private http: HttpClient){

  }

  onSubmit(form: NgForm){
  this.http.post('http://127.0.0.1:8080/personas',
  {
    "nombre":form.value.nombre,
    "apellido":form.value.apellido,
    "contrasena":form.value.contrasena,
    "email":form.value.email,
    "telefono":form.value.telefono,
    "fecha_nacimiento":form.value.fecha_nacimiento
  }).subscribe(responseData =>{
      console.log(responseData)
  })
  }

}
