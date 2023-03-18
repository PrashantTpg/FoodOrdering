import { Component, OnInit , ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { SidenavService } from '../../service/sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @ViewChild('drawer') 
  public drawer : MatDrawer;

  constructor(private sideNavService : SidenavService){    

  }
  ngOnInit(){
    this.sideNavService.sideNavToggleSubject.subscribe(()=>{
    
    })
  }
}
