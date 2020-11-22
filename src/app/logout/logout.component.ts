import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "src/app/shared/api.authentication.service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private authenticationService : AuthenticationService, 
    private router: Router) { }

  ngOnInit() {
  }

  logout(){
    this.authenticationService.logout();
    this.router.navigate(['/home']);

  }

}
