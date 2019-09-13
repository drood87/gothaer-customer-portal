import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductsService {
  public api: string;

  constructor(private http: HttpClient) {}

  fetchProducts() {
    this.api = 'https://api.jsonbin.io/b/5d7622dfc22e9d0afd2958a7';
    return this.http.get(this.api, {
      headers: new HttpHeaders({
        'secret-key':
          '$2a$10$2ffWVgeCpYtciy0QzJ7fuOH5rIzs90CLGdFetjWCiTnbqp5/t73mi'
      })
    });
  }
}
