import { Component, EventEmitter, OnInit, Output, SimpleChanges } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ComunicateService } from 'src/app/services/comunicate.service';
import { Product } from '../products/product.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  
@Output() open = new EventEmitter()

  map = new Map<Product, number>();
  totalCartItem : number;

  constructor(private router : Router, private service : ComunicateService) {
  }

  ngOnInit() {
    this.service.cartItem.subscribe(value =>{      
      this.setValueIntoMap(value);
      this.getTotalCartItem();
    });
  }

  sideToggle() {
    this.open.emit();
  }

  logout(){
    this.router.navigate(["/"]);
  }

  setValueIntoMap(data : any){    
    this.map.set(data.productItem,data.quantity);   
    console.log(this.map); 
  }

  getTotalCartItem(){
    this.totalCartItem = 0;
    this.map.forEach(value => {      
      this.totalCartItem += value;
    });
    console.log(this.totalCartItem);
  }

}
