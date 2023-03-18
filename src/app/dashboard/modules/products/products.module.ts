import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { CustomMaterialModuleModule } from '../../../custom-material/custom-material-module.module';

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
    RouterModule.forChild(routes)
  ],
  exports :[
    RouterModule
  ]
})
export class ProductsModule { }