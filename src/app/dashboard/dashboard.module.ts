import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { NavbarModule } from './modules/navbar/navbar.module';
import { SidenavModule } from './modules/sidenav/sidenav.module';
import { SidenavService } from './service/sidenav.service';

const routes : Routes= [
  { path: '' , component:DashboardComponent, 
    children : 
      [
        {path:'', redirectTo:'products', pathMatch:'full'},
        { path :'products' , loadChildren :() => import('./modules/products/products.module').then(m=>m.ProductsModule) },    
      ]
  },
];


@NgModule({
  declarations: [
    DashboardComponent,    
  ],
  imports: [
    CommonModule,    
    NavbarModule,
    SidenavModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ],
  providers: [SidenavService],
})
export class DashboardModule { }
