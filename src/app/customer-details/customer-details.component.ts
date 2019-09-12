import { Component, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss'],
  providers: [CustomerService]
})
export class CustomerDetailsComponent implements OnInit {
  customer: {
    name: string;
    membership_type: string;
    age: number;
    selected_insurances: any;
  };

  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    /* outsource logic to service to keep dry and components clean*/

    if (history.state.data) {
      const routeData = history.state.data[0];
      this.customer = this.customerService.createCustomer(routeData);
      console.log(history.state.data);
    } else if (!history.state.data) {
      const retrieveData = localStorage.getItem('customerData');
      this.customer = this.customerService.createCustomer(
        JSON.parse(retrieveData)
      );
    }
  }
}
