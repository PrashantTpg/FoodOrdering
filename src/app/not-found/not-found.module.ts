import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found.component';
import { CustomMaterialModuleModule } from '../custom-material/custom-material-module.module';

const routes : Routes = [
  {path : '', component : NotFoundComponent}
]

@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    CustomMaterialModuleModule,
    RouterModule.forChild(routes)
  ],
  exports : [
    RouterModule
  ]
})
export class NotFoundModule { }
