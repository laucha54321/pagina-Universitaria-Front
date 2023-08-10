import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { AuthService } from "./auth.service";

@Injectable({providedIn:'root'})
export class AuthGuard{

    constructor(private authService: AuthService){}

    canActivate(route: ActivatedRouteSnapshot, router:RouterStateSnapshot):
    boolean|
    Promise<boolean>|
    Observable<boolean>
    {
        return this.authService.user.pipe(map(user =>{ return !!user}));
    }

}