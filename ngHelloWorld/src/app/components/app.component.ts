import { Component, Input } from '@angular/core';
import {AppMenuComponent} from '../app-menu/app-menu.component';
import { CustomerService } from '../customer.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'World';
  message = 'This is an app created using angular-cli.';
  menu = 'home';

  isHome = true;
  isCustomers = false;

  menuChange($event) {
    this.menu = $event;
    this.message = 'received event : ' + this.menu;

    switch (this.menu) {
      case 'customers':
        this.isCustomers = true; this.isHome = false; break;
      case 'home':
      default:
        this.isHome = true; this.isCustomers = false;
    }
  }
}
