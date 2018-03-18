import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './components/app.component';
import { AppMenuComponent } from './app-menu/app-menu.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerService } from './customer.service';


@NgModule({
  declarations: [
    AppComponent,
    AppMenuComponent,
    CustomersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    CustomerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
