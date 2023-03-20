import { Component, EventEmitter, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent   implements OnInit{
  
@Output() open = new EventEmitter()
  constructor() {
  }

  ngOnInit() {

  }

  sideToggle() {
    this.open.emit();
  }
}
