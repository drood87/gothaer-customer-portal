import { HttpClient, HttpHeaders } from '@angular/common/http';

export class ProductsService {
  public memberships: {
    premium: object;
    plus: object;
    basic: object;
  };

  public products: {
    accidentInsurance: object;
    lifeInsurance: object;
    carInsurance: object;
  };

  public api: string;

  public stickers: object;

  public customerAvailableProducts: any;

  constructor(private http: HttpClient) {}

  fetchProducts(customerData: any) {
    this.api = 'https://api.jsonbin.io/b/5d7622dfc22e9d0afd2958a7';
    return this.http
      .get(this.api, {
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
    if (customerData.membership_type === 'basic') {
      this.customerAvailableProducts = this.memberships.basic;
    } else if (customerData.membership_type === 'plus') {
      this.customerAvailableProducts = this.memberships.plus;
    } else if (customerData.membership_type === 'premium') {
      this.customerAvailableProducts = this.memberships.premium;
    }
    console.log(this.customerAvailableProducts);
    return this.customerAvailableProducts;
  }
}
