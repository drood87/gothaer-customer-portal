export class CustomerService {
  customerData: {
    name: string;
    membership_type: string;
    age: number;
    selected_insurances: any;
  };

  createCustomer(customer: any) {
    /*check if customer has insurances, if not replace with string*/

    const insurances = (function() {
      if (customer.selected_insurances.length === 0) {
        return ['No insurances active'];
      } else {
        return customer.selected_insurances;
      }
    })();

    this.customerData = {
      name: customer.name,
      membership_type: customer.membership_type,
      age: customer.age,
      selected_insurances: insurances.map(insurance =>
        insurance
          .replace('_', ' ')
          .toLowerCase()
          .split(' ')
          .map(s => s.charAt(0).toUpperCase() + s.substring(1))
          .join(' ')
      )
    };

    /*store customer object into local storage to persist data on page reload (just a little hack as I'm not saving it on a database otherwise we could make an HTTP request to fetch the data of course) */

    localStorage.setItem('customerData', JSON.stringify(this.customerData));

    return this.customerData;
  }
}
