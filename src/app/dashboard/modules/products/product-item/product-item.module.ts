import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from './product-item.component';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { CustomMaterialModuleModule } from 'src/app/custom-material/custom-material-module.module';
import { FormsModule } from '@angular/forms';

const routes : Routes =[
  { path : '', component:ProductItemComponent}
];


@NgModule({
  declarations: [
    ProductItemComponent
  ],
  imports: [
    CommonModule,    
    CustomMaterialModuleModule,
    FormsModule,
  ],
  exports : [
    ProductItemComponent
  ]
})
export class ProductItemModule { }
