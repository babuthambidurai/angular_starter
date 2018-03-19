import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customerList: any = [];

  constructor(private customerService: CustomerService) {
  }

  ngOnInit() {
    let t = this;
    this.customerService.getCustomersApi().subscribe(
      (data) => {
        console.log(data);
        t.customerList = data;
      }
    );
  }

}
