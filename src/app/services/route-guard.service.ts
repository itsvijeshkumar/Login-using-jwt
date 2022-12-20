import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {LoginService} from "./login.service";

@Injectable({
    providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

    constructor(private router: Router, private loginService: LoginService) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if (this.loginService.isUserLoggedIn()) {
            console.log("isUserLoggedIn() in RouteGuardService when true : " + this.loginService.isUserLoggedIn())
            return true;
        }
        console.log("isUserLoggedIn() in RouteGuardService when false : " + this.loginService.isUserLoggedIn())
        this.router.navigate(["/login"]);
        return false;
    }
}
