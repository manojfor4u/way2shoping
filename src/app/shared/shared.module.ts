import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { MainComponent } from './layout-component/main/main.component';
import { SidebarComponent } from './layout-component/sidebar/sidebar.component';
import { HeaderComponent } from './layout-component/header/header.component';
import { FooterComponent } from './layout-component/footer/footer.component';
import { AssetsPathPipe } from './pipes/assets-path.pipe';
import { InputControlMessagesComponent } from './validations/InputControlMessagesComponent';
import { EcommerceService} from '../shared/services/ecommerce.service';
@NgModule({
  declarations: [
    MainComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    AssetsPathPipe,
    InputControlMessagesComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
  ],
  exports:[AssetsPathPipe,InputControlMessagesComponent],
  providers:[AssetsPathPipe,EcommerceService]
})
export class SharedModule { }
