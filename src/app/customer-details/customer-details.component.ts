import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    /*check if customer has insurances, if not replace with string*/
    const insurances = (function() {
      if (history.state.data[0].selected_insurances.length === 0) {
        return 'No insurances';
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

    console.log(this.customer);
  }
}
