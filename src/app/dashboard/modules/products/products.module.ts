import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { CustomMaterialModuleModule } from '../../../custom-material/custom-material-module.module';
import { FormsModule } from '@angular/forms';
import { ProductItemModule } from './product-item/product-item.module';

const routes : Routes =[
  { path : '', component:ProductsComponent}
];

@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    CustomMaterialModuleModule,
    FormsModule,
    ProductItemModule,
    RouterModule.forChild(routes)
  ],
  exports :[
    RouterModule
  ]
})
export class ProductsModule { }
