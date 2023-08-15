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
  user:any;
  notas = []
  constructor (private authService:AuthService,private http: HttpClient){}

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(user =>{ 
      this.user = user._token

      console.log("Bearer "+ this.user)
      this.http.get(
        'http://localhost:8080/curso_persona_nota',
      {headers:
        {"authorization":"Bearer "+ this.user}
      }).subscribe(data=>{
          console.log(data)
          this.notas = data[0]
          console.log(this.notas)
        })

      })

    }
  


}
