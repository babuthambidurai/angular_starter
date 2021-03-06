import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CustomerService {

  constructor(private http: HttpClient) { }

  public getCustomers() {
    return [
      {
        name: 'John Montague',
        fund: 'EFX 109 Equity Fund',
        nav: '10.98',
        qty: 1250
      }, {
        name: 'Jerry Winston',
        fund: 'IRA Roth KYN Fund',
        nav: '123.98',
        qty: 5000
      }, {
        name: 'Gina Mestales',
        fund: 'QT Infrastructure Global Equity Fund',
        nav: '34.77',
        qty: 10000
      }, {
        name: 'Pierre Escardin',
        fund: 'Euro TFX Fixed Income Fund',
        nav: '99.08',
        qty: 9900
      }, {
        name: 'Graham Ford',
        fund: 'Intl. Gold ETF Fund',
        nav: '1009.98',
        qty: 400
      }, 
    ];
  }

  public getCustomersApi() {
    return this.http.get('http://localhost:8080/customers');
  }

}
