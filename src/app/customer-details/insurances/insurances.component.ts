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
    stickers: object;
    carInsurance: object;
  };

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
        this.products = {
          accidentInsurance: response['accident_insurance'],
          lifeInsurance: response['life_insurance'],
          stickers: response['gothaer_stickers'],
          carInsurance: response['car_insurance']
        };
        console.log(this.products);
      });
  }
}
