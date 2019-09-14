import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../products.service';

@Component({
  selector: 'app-stickers',
  templateUrl: './stickers.component.html',
  styleUrls: ['./stickers.component.scss'],
  providers: [ProductsService]
})
export class StickersComponent implements OnInit {
  public stickers: any;

  public isDataLoaded: boolean = false;

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.productsService.fetchProducts().subscribe(response => {
      this.stickers = {
        name: 'Gothaer Stickers',
        details: response['gothaer_stickers']
      };
      /* just load template if fetch call is finished and set to true */
      this.isDataLoaded = true;
    });
  }

  makeStickers() {
    console.log(this.stickers);
  }
}
