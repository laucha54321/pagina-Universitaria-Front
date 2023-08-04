import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy{

  isSingedIn = false;
  private userSub: Subscription = new Subscription;

  constructor(private authService:AuthService){

  }

  ngOnInit(){
    this.userSub = this.authService.user.subscribe(user =>{
      if(user){
        this.isSingedIn = true;
      }
      else{
        this.isSingedIn = false;
      }
    });
    // Tengo que llamar aca al autoLogin() xq por alguna razon llamarlo en
    // app.component.ts no me funciona, creo que tiene que ver con el orden
    // primero se tiene que realizar la subscripcion.
    this.authService.autoLogin();
  }

  onLogout(){
    this.authService.logout();
  }

  onClick(){
    this.authService.autoLogin();
  }

  ngOnDestroy(){
    this.userSub.unsubscribe();
  }

}
