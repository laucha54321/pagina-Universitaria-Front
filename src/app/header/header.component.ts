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

  constructor(private authService:AuthService){}

  ngOnInit(){
    this.userSub = this.authService.user.subscribe(user =>{
      console.log("Header:",user)
      this.isSingedIn = !!user.token;
    });
    console.log('Header: ',this.userSub)
  }

  ngOnDestroy(){
    this.userSub.unsubscribe();
  }

}
