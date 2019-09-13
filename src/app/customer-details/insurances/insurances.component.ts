import { Component, OnInit, Input } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProductsService } from '../products.service';
import { request } from 'https';

@Component({
  selector: 'app-insurances',
  templateUrl: './insurances.component.html',
  styleUrls: ['./insurances.component.scss'],
  providers: [ProductsService]
})
export class InsurancesComponent implements OnInit {
  /* fetch data for the customer from parent element */
  @Input() customerData: {
    name: string;
    age: number;
    membership_type: string;
    selected_insurances: any;
  };

  public products: {
    accidentInsurance: object;
    lifeInsurance: object;
    carInsurance: object;
  };

  public memberships: {
    premium: object;
    plus: object;
    basic: object;
  };

  public stickers: object;

  public customerAvailableProducts: any;

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    /* fetch request in service to keep component small and accessible to other components that might need data from the request */
    this.productsService.fetchProducts().subscribe(response => {
      (this.stickers = {
        name: 'Gothaer Stickers',
        details: response['gothaer_stickers']
      }),
        (this.products = {
          accidentInsurance: {
            name: 'Accident Insurance',
            details: response['accident_insurance']
          },

          lifeInsurance: {
            name: 'Life Insurance',
            details: response['life_insurance']
          },
          carInsurance: {
            name: 'Car Insurance',
            details: response['car_insurance']
          }
        });
      this.availableProducts();
    });
  }

  /* create object that saves the memberships into new object without stickers  */
  availableProducts() {
    this.memberships = {
      premium: [
        this.products.accidentInsurance,
        this.products.lifeInsurance,

        this.products.carInsurance
      ],
      plus: [this.products.accidentInsurance, this.products.lifeInsurance],
      basic: [this.products.lifeInsurance]
    };
    this.checkMembershipAndShowProducts();
  }

  /* check what membership customer has and save the available products*/
  checkMembershipAndShowProducts() {
    if (this.customerData.membership_type === 'basic') {
      this.customerAvailableProducts = this.memberships.basic;
    } else if (this.customerData.membership_type === 'plus') {
      this.customerAvailableProducts = this.memberships.plus;
    } else if (this.customerData.membership_type === 'premium') {
      this.customerAvailableProducts = this.memberships.premium;
    }

    return this.customerAvailableProducts;
  }
}
