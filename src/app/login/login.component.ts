import { Component, OnInit } from '@angular/core';
import customersData from '../../assets/data/customers.json';
import { Router } from '@angular/router';
import undefined = require('firebase/empty-import');

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
        return true;
      } else {
        return false;
      }
    });
    this.routeChange(customer);
    return customer;
  }

  routeChange(customer) {
    // check if customer is not empty then change routes otherwise throw error
    if (customer.length !== 0) {
      this.router.navigate(['/customer-details'], {
        state: { data: { ...customer } }
      });
    } else {
      console.log('User not found');
    }
  }
}
