import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { response } from 'express';

@Component({
  selector: 'app-calificaciones',
  templateUrl: './calificaciones.component.html',
  styleUrls: ['./calificaciones.component.css']
})
export class CalificacionesComponent implements OnInit{

  private userSub: Subscription = new Subscription;

  constructor (private authService:AuthService,private http: HttpClient){}

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(user =>{ 
      console.log(user)
    })
    this.http.get(
      'http://localhost:8080/curso_persona_nota',
    {headers:
      {"authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJpYXQiOjE2OTIwNjMzNzksImV4cCI6MTY5MjA4MTM3OX0.EEe-TgAlW9_nv2wsJEiZjDA5qbbp0DDxnbzwf7Ze-mI"}
    }).subscribe(data=>{
        console.log(data)
      })
    }
  


}
