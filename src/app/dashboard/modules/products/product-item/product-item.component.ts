import { Component } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent {

  
  quantity : number = 0;

  addQuantity(){
    this.quantity = this.quantity  + 1;    
  }

  removeQuantity(){
      if(this.quantity == 0){
          alert("please add item");
      }else{
          this.quantity = this.quantity  - 1;          
      }
  }
}
