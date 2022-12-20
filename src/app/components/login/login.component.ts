import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "../../services/login.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    credentials = {
        username: 'Vijesh',
        password: 'AqU8ISe3iF/GJzaA2ZmqS+HIENEpuX+ObrVmmTHWblePKtGm8v3bdEpWipX/DpKSKrPmpU6AyyAqE+jkcJM3WBqMYTEu13++eM0gUHBe9sB6Wej5FV6juZvbeIk3bBhnPRlONRy6koMx8IIchwbPKaTjzRZVDU5kFacBp7y7xa8='
    }
    errorMessage: string = 'Invalid Credentials'
    invalidLogin: boolean = false

    constructor(private router: Router, private loginService: LoginService) {
    }

    onSubmit() {
        console.log("from is submitted");
        if ((this.credentials.username != '' && this.credentials.password != '') && (this.credentials.username != null && this.credentials.password != null)) {
            //token generate
            this.loginService.generateToken(this.credentials).subscribe(
                (response:any) => {
                    //success
                    console.log(response.accessToken);
                    this.invalidLogin = false
                    this.loginService.loginUser(response.accessToken);
                    this.router.navigate(['home', this.credentials.username])
                },
                error => {
                    //error
                    console.log(error)
                    this.invalidLogin = true
                }
            );
        } else {
            console.log("Values are empty")
        }
    }

    ngOnInit(): void {
    }
}
