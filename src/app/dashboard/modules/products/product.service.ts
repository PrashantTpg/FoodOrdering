import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { productList } from './product.data';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  public getProductList():Observable<Product[]>{
    return of(productList);
    
  }
}
