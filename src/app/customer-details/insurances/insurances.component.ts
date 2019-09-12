import { Component, OnInit, Input } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { stringToKeyValue } from '@angular/flex-layout/extended/typings/style/style-transforms';

@Component({
  selector: 'app-insurances',
  templateUrl: './insurances.component.html',
  styleUrls: ['./insurances.component.scss']
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

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    return this.http
      .get('https://api.jsonbin.io/b/5d7622dfc22e9d0afd2958a7', {
        headers: new HttpHeaders({
          'secret-key':
            '$2a$10$2ffWVgeCpYtciy0QzJ7fuOH5rIzs90CLGdFetjWCiTnbqp5/t73mi'
        })
      })
      .subscribe(response => {
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

  checkMembershipAndShowProducts() {
    if (this.customerData.membership_type === 'basic') {
      this.customerAvailableProducts = this.memberships.basic;
    } else if (this.customerData.membership_type === 'plus') {
      this.customerAvailableProducts = this.memberships.plus;
    } else if (this.customerData.membership_type === 'premium') {
      this.customerAvailableProducts = this.memberships.premium;
    }
    console.log(this.customerAvailableProducts);
    return this.customerAvailableProducts;
  }
}
