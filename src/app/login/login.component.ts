import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../shared/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../app.component.scss']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(public authenticationService: AuthenticationService) {}

  ngOnInit() {}

  SignIn() {
    this.email = '';
    this.password = '';
  }
}
