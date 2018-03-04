import { NgModule } from "@angular/core";
import { IonicPageModule } from 'ionic-angular';
import { LoginComponent } from './login/login';
import { GetFooterComponent } from './get-footer/get-footer';

@NgModule({
  declarations: [
    LoginComponent,
    GetFooterComponent],
  imports: [IonicPageModule],
  exports: [
    LoginComponent,
    GetFooterComponent]
})
export class ComponentsModule {}
