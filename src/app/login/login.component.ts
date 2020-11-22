import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "src/app/shared/api.authentication.service";
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading = false;
  submitted = false;
  returnUrl: string;

  model: LoginViewModel = {
    email: '',
    password: ''
  };

  constructor(
      private authenticationService: AuthenticationService,
      private route: ActivatedRoute,
      private router: Router
    ) {}

  ngOnInit() {

      // reset login status
      this.authenticationService.logout();

      // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  loginUser() {
      this.submitted = true;

      this.loading = true;
      this.authenticationService.login(this.model)
          .pipe(first())
          .subscribe(
              data => {
                  this.router.navigate([this.returnUrl]);
              },
              error => {
                  console.log(error);
                  this.loading = false;
              });
  }
}

export interface LoginViewModel {
  email: string;
  password: string;
}

