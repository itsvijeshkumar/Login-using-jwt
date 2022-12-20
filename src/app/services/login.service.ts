import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    private baseUrl = 'http://localhost:8080/api/v1';

    constructor(private http : HttpClient) {
    }

    generateToken(credentials:any) {
        //token generate
        return this.http.post(this.baseUrl + "/client/authenticate",credentials)
    }

    loginUser(token: any) {
        localStorage.setItem("token", token)
        return true;
    }

    isUserLoggedIn() {
        let token = localStorage.getItem("token")
        console.log("isUserLoggedIn() in Login.service.ts : " + token);
        return !(token === null)
    }

    logout(){
        localStorage.removeItem('token');
        return true;
    }

    getToken(){
        return localStorage.getItem('token')
    }
}
