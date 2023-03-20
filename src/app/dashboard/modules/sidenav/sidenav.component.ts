import { Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnChanges{

  @Input() openNav : boolean;
  @ViewChild('drawer') public drawer: MatSidenav;

  ngOnChanges() {
    
    if(this.openNav){
        this.drawer.open();
    }else{
        this.drawer.close();
    }
    
  }
}
