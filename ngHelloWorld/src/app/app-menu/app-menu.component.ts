import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.css']
})
export class AppMenuComponent implements OnInit {
  @Input() menu:  String;
  @Output() menuEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    console.log('App Menu');
    console.log(this.menu);
  }

  onSelect(m) {
    this.menuEvent.emit(m);
    console.log(m);
  }

}
