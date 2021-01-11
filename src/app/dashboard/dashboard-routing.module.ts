import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from '../shared/layout-component/main/main.component';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { ProductsComponent} from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutComponent } from './about/about.component';
const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'acount', component: AccountComponent },
      { path : 'product', component:ProductsComponent },
      { path :'product-details', component:ProductDetailsComponent },
      { path :'add-to-cart', component:AddToCartComponent },
      { path :'login', component:LoginComponent },
      { path :'registration', component:RegistrationComponent },
      { path :'contact', component:ContactUsComponent },
      { path :'about', component:AboutComponent }
    ]
  }
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule],
})
export class DashboardRoutingModule { }
