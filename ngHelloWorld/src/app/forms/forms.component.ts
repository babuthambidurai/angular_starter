import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  contact = this.createContact();

  contacts = [];

  constructor() { }

  ngOnInit() {
  }

  createContact() {
    return {
      name: '',
      email: '',
      mobile: '',
      other: ''
    };
  }

  addContact() {
    console.log(this.contact);
    this.contacts.push(this.contact);
    this.contact = this.createContact();
    console.log(this.contacts);
  }

}
