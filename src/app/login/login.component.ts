import { Component, OnInit } from '@angular/core';
import customersData from '../../assets/data/customers.json';
import { Router } from '@angular/router';

/* for firebase user authentication */
// import { AuthenticationService } from '../shared/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../app.component.scss']
})
export class LoginComponent implements OnInit {
  customers: any = customersData;
  userName: string = '';
  userPassword: string = '';

  /* for user authentication with email via firebase */
  // constructor(public authenticationService: AuthenticationService) {}

  constructor(private router: Router) {}
  ngOnInit() {}

  signIn() {
    /* grab username and password */

    this.userName;
    this.userPassword;

    /* Check login credentials */

    const customer = customersData.customers.filter(customer => {
      if (
        this.userName === customer.name &&
        this.userPassword === customer.password
      ) {
        console.log(`User found`);
        //if user is found navigate to the details component

        return true;
      } else {
        console.log('No user found');
        return false;
      }
    });

    if (customer !== []) {
      console.log(customer);
      this.router.navigate(['/customer-details'], {
        state: { data: { ...customer } }
      });
    }
  }
}
