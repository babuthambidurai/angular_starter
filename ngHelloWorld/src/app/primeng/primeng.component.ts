import { Component, OnInit } from "@angular/core";
import {SelectItem, SelectItemGroup} from 'primeng/api';

@Component({
  selector: "app-primeng",
  templateUrl: "./primeng.component.html",
  styleUrls: ["./primeng.component.css"]
})
export class PrimengComponent implements OnInit {
  cities: SelectItem[];
  selectedCity: string;
  data: any;

  constructor() {
    this.cities = [
      { label: "New York", value: "NY" },
      { label: "Rome", value: "RM" },
      { label: "London", value: "LDN" },
      { label: "Istanbul", value: "IST" },
      { label: "Paris", value: "PRS" }
    ];

    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
          {
              label: 'My First dataset',
              backgroundColor: '#42A5F5',
              borderColor: '#1E88E5',
              data: [65, 59, 80, 81, 56, 55, 40]
          },
          {
              label: 'My Second dataset',
              backgroundColor: '#9CCC65',
              borderColor: '#7CB342',
              data: [28, 48, 40, 19, 86, 27, 90]
          }
      ]
  };

  }

  ngOnInit() {}
}
