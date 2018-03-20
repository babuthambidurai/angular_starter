import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {DropdownModule, ButtonModule, ChartModule} from 'primeng/primeng';

import { AppComponent } from './components/app.component';
import { AppMenuComponent } from './app-menu/app-menu.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerService } from './customer.service';
import { FormsComponent } from './forms/forms.component';
import { SignupComponent } from './signup/signup.component';
import { TestComponent } from './test/test.component';
import { PrimengComponent } from './primeng/primeng.component';

@NgModule({
  declarations: [
    AppComponent,
    AppMenuComponent,
    CustomersComponent,
    FormsComponent,
    SignupComponent,
    TestComponent,
    PrimengComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    DropdownModule,
    ButtonModule,
    ChartModule
  ],
  providers: [
    CustomerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
