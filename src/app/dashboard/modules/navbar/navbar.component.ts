import { Component, EventEmitter, OnInit, Output, SimpleChanges } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ComunicateService } from 'src/app/services/comunicate.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent   implements OnInit{
  
@Output() open = new EventEmitter()
  
  constructor(private router : Router, private service : ComunicateService) {
  }

  ngOnInit() {
    this.service.cartItem.subscribe(value =>{
      console.log(value);
    });
  }

  sideToggle() {
    this.open.emit();
  }

  logout(){
    this.router.navigate(["/"]);
  }
}
