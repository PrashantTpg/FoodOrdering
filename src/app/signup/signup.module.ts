import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup.component';
import { CustomMaterialModuleModule } from '../custom-material/custom-material-module.module';

const routes : Routes = [
  { path : '', component : SignupComponent}
]

@NgModule({
  declarations: [
    SignupComponent
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
export class SignupModule { }
