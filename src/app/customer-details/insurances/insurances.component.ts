import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-insurances',
  templateUrl: './insurances.component.html',
  styleUrls: ['./insurances.component.scss']
})
export class InsurancesComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.http
      .get('https://api.jsonbin.io/b/5d7622dfc22e9d0afd2958a7', {
        headers: new HttpHeaders({
          'secret-key':
            '$2a$10$2ffWVgeCpYtciy0QzJ7fuOH5rIzs90CLGdFetjWCiTnbqp5/t73mi'
        })
      })
      .subscribe(response => console.log(response));
  }
}
