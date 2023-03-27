import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    userName : string;
    password : string;

    constructor(private router : Router){

    }

  loggedIn(){
    console.log(this.userName+" >> "+this.password);
    if(this.userName == "admin" && this.password == "admin"){
      this.router.navigate(['/dashboard']);
    }else {
      alert("Wrong Details");
    }
  }
}
