import { Component , OnInit } from '@angular/core';
import { Product } from './product.model';
import { ProductService } from './product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productList : Product[];

  constructor(private ps : ProductService){

  }
  
  getProduct(){
    this.ps.getProductList().subscribe((success)=> {
     // console.log(success);
      this.productList = success;
    });
  }

  ngOnInit(): void {
    this.getProduct();
  }
}
