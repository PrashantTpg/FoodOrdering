import { Component , Input } from '@angular/core';
import { ComunicateService } from 'src/app/services/comunicate.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent {

  @Input() productItem : Product;
  
  quantity : number = 0;
  addButtonVisibilty : boolean = true;

  constructor(private service : ComunicateService){

  }

  addQuantity(){
    if(this.quantity == 0){
      this.addButtonVisibilty = false;
    }
    this.quantity = this.quantity  + 1;
    this.service.cartItem.next(
      {
        productItem : this.productItem,
        quantity : this.quantity
      });
  }

  removeQuantity(){
      this.quantity = this.quantity  - 1;          
      if(this.quantity == 0){
        this.addButtonVisibilty = true;
      }
      this.service.cartItem.next(
        {
          productItem : this.productItem,
          quantity : this.quantity
        }
      );
    }



}
