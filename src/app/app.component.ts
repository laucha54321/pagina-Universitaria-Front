import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'tp-desarollo-software';

  constructor(private authService: AuthService){}

  ngOnInit(): void {
    this.authService.autoLogin()
    console.log('App Component:',this.authService.user)
  }

}
