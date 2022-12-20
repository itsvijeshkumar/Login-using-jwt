import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../../services/login.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  isUserLoggedIn : boolean = false;
  constructor(public loginService: LoginService) {
  }

  ngOnInit(): void {
    this.isUserLoggedIn = this.loginService.isUserLoggedIn();
  }

  logoutUser() {
    this.loginService.logout();
    location.reload();
  }
}
