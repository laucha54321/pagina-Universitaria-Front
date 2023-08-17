import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-calificaciones-profesor',
  templateUrl: './calificaciones-profesor.component.html',
  styleUrls: ['./calificaciones-profesor.component.css']
})
export class CalificacionesProfesorComponent {

  private userSub: Subscription = new Subscription;
  user:any;
  notas = []
  constructor (private authService:AuthService,private http: HttpClient){}

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(user =>{ 
      this.user = user._token

      console.log("Bearer "+ this.user)
      this.http.get(
        'http://localhost:8080/curso_persona_nota/profesor',
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
