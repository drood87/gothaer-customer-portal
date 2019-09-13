import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductsService {
  public api: string;

  public stickers: object;

  public httpRequest: any;

  constructor(private http: HttpClient) {}
  /* in production make API request with headers to a backend and hide sensible data */
  fetchProducts() {
    this.api = 'https://api.jsonbin.io/b/5d7622dfc22e9d0afd2958a7';
    this.httpRequest = this.http.get(this.api, {
      headers: new HttpHeaders({
        'secret-key':
          '$2a$10$2ffWVgeCpYtciy0QzJ7fuOH5rIzs90CLGdFetjWCiTnbqp5/t73mi'
      })
    });
    return this.httpRequest;
  }
}
