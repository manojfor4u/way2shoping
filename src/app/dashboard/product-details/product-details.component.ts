import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  ProductImg;
  SmallImg;
  constructor() { }

  ngOnInit(): void {
    this.ProductImg = document.getElementById("ProductImg");
    this.SmallImg = document.getElementsByClassName("small-img");
    window.scrollTo(0, 0);
  }

  abc() {
    for (let i = 0; i < 4; i++) {
      this.SmallImg[i].onclick = () => {
        this.ProductImg.src = this.SmallImg[i].src;
      }
    }
  }
}
