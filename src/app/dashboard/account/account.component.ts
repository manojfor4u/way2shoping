import { Component, OnInit } from '@angular/core';
import { EcommerceService } from '../../shared/services/ecommerce.service';
import { Home } from '../../shared/Models/Home';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  loginForm;
  regForm;
  indicator;
  constructor(    private toastrService: ToastrService,private ecommerceService: EcommerceService
    ) { }

  ngOnInit(): void {
    this.loginForm = document.getElementById("LoginForm");
    this.regForm = document.getElementById("RegForm");
    this.indicator = document.getElementById("Indicator");
    this.getAll();
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
  getAll() {
   
    console.log("hhhhj"+this.ecommerceService.getAllData())
  }
}
