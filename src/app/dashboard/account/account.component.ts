import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  loginForm;
  regForm;
  indicator;
  constructor() { }

  ngOnInit(): void {
    this.loginForm = document.getElementById("LoginForm");
    this.regForm = document.getElementById("RegForm");
    this.indicator = document.getElementById("Indicator");
  }


  register() {
    this.regForm.style.transform = "translateX(0px)";
    this.loginForm.style.transform = "translateX(0px)";
    this.indicator.style.transform = "translateX(100px)";
  }

  login() {
    this.regForm.style.transform = "translateX(300px)";
    this.loginForm.style.transform = "translateX(300px)";
    this.indicator.style.transform = "translateX(0px)";
  }
 
}
