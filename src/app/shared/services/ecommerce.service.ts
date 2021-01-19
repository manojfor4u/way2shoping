import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Home } from '../Models/Home';
import { NgxSpinnerService } from "ngx-spinner";

const headerOption = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable()
export class EcommerceService {
  constructor(private http: HttpClient,private ngxSpinnerService: NgxSpinnerService
    ) { }


  allData: Home[];
  mockUrl: string = 'http://localhost:3000/Home';


  currentEmployee: Home = {
    login: '',
    id: null,
    node_id: ''
  }

  getAllData(){
    return this.http.get<Home[]>(this.mockUrl,headerOption).subscribe((data:Home[]) =>{
      this.allData =data;
      console.log(this.allData)
      console.table(this.allData);
      setTimeout(() => {
        this.ngxSpinnerService.hide();
      }, 500);
    })
  }
}
