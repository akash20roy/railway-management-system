import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  [x: string]: any;

  constructor(private router:Router) { }

  ngOnInit() {
  }


  ticket(){
    this.router.navigate(["/ticket"]);
  }
}
