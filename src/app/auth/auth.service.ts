import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { User } from "./user.model";

@Injectable({providedIn:'root'})

export class AuthService{

    user = new Subject<User>();

    constructor(private http: HttpClient){

    }

    login(datos:any){
        return this.http.post('http://127.0.0.1:3080/login',{
            "id":datos.id,
            "contrasena":datos.contrasena
        })
    }

    signUp(datos:any){
        return this.http.post('http://127.0.0.1:8080/personas',
        {
          "nombre":datos.nombre,
          "apellido":datos.apellido,
          "contrasena":datos.contrasena,
          "email":datos.email,
          "telefono":datos.telefono,
          "fecha_nacimiento":datos.fecha_nacimiento
        })
    }

}