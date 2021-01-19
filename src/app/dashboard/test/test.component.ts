import { Component, OnInit } from '@angular/core';
import { EcommerceService } from '../../shared/services/ecommerce.service';
import { Home } from '../../shared/Models/Home';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(private ecommerceService: EcommerceService) { }
p;
  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.ecommerceService.getAllData().add(data  =>{
      this.p=data;
      console.log(this.p)
    })
  }
}
