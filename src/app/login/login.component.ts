import { Component, OnInit } from '@angular/core';
import { SecurityService } from '../shared/security.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLogged: boolean = false;

  constructor(private securityService: SecurityService) { }

  ngOnInit(): void {
    this.isLogged = this.securityService.isLoggedIn();
  }

  login() {
    this.securityService.login();
  }

  logout()
  {
    this.securityService.logout() .subscribe(() => {
      this.securityService.removeToken();
      this.isLogged = this.securityService.isLoggedIn();
    });
  }
}
