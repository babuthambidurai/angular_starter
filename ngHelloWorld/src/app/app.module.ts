import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './components/app.component';
import { AppMenuComponent } from './app-menu/app-menu.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerService } from './customer.service';
import { FormsComponent } from './forms/forms.component';


@NgModule({
  declarations: [
    AppComponent,
    AppMenuComponent,
    CustomersComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    CustomerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
