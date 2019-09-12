import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {
  customer: {
    name: string;
    membership_type: string;
    age: number;
    selected_insurances: any;
  };

  constructor() {}

  ngOnInit() {
    /*check if it's first time loading it and if there is a history from route changing and set object then otherwise retrieve data from local storage*/

    if (history.state.data) {
      /*check if customer has insurances, if not replace with string*/

      const insurances = (function() {
        if (history.state.data[0].selected_insurances.length === 0) {
          return ['No insurances'];
        } else {
          return history.state.data[0].selected_insurances;
        }
      })();

      this.customer = {
        name: history.state.data[0].name,
        membership_type: history.state.data[0].membership_type,
        age: history.state.data[0].age,
        selected_insurances: insurances.map(insurance =>
          insurance.replace('_', ' ')
        )
      };

      /*store customer object into local storage to persist data on page reload (just a little hack as I'm not saving it on a database otherwise we could make an HTTP request to fetch the data of course) */

      localStorage.setItem('customerData', JSON.stringify(this.customer));
    } else if (!history.state.data) {
      const customerData = (function() {
        const retrieveData = localStorage.getItem('customerData');
        const data = JSON.parse(retrieveData);
        return data;
      })();

      const insurances = (function() {
        if (customerData.selected_insurances.length === 0) {
          return ['No insurances'];
        } else {
          return customerData.selected_insurances;
        }
      })();

      this.customer = {
        name: customerData.name,
        membership_type: customerData.membership_type,
        age: customerData.age,
        selected_insurances: insurances.map(insurance =>
          insurance
            .replace('_', ' ')
            .toLowerCase()
            .split(' ')
            .map(s => s.charAt(0).toUpperCase() + s.substring(1))
            .join(' ')
        )
      };
    }
  }
}
