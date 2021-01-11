import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuItems;
  constructor() { }

  ngOnInit(): void {
    this.menuItems = document.getElementById("MenuItems");
    this.menuItems.style.maxHeight = "0px";
  }

  menutoggle() {
    if (this.menuItems.style.maxHeight == "0px") {
      this.menuItems.style.maxHeight = "200px";
    }
    else {
      this.menuItems.style.maxHeight = "0px";
    }
  }
}
