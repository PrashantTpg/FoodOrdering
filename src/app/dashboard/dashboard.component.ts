import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  isOpen : boolean;
ngOnInit(){

}

openNav($event : any):void{
  this.isOpen  = !this.isOpen;
  console.log("testing @Ouptut to passed value from child to parent is "+$event+" >>"+ this.isOpen);
}

}
