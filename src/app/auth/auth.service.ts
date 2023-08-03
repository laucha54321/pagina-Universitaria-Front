import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router"
import { Subject } from "rxjs";
import { tap } from "rxjs/operators";
import { User } from "./user.model";

interface AuthResponseData{
    id:string;
    accessToken:string;
}

@Injectable({providedIn:'root'})



export class AuthService{

    user = new Subject<User>();

    constructor(private http: HttpClient, private router:Router){

    }

    login(datos:any){
        return this.http.post<AuthResponseData>('http://127.0.0.1:3080/login',{
            "id":datos.id,
            "contrasena":datos.contrasena
        }).pipe(tap(responseData=>{
            const user = new User(responseData.id,responseData.accessToken)
            console.log(user)
            this.user.next(user);
        }))
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