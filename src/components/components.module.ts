import { NgModule } from "@angular/core";
import { IonicPageModule } from 'ionic-angular';
import { LoginComponent } from './login/login';

@NgModule({
  declarations: [
    LoginComponent],
  imports: [IonicPageModule],
  exports: [
    LoginComponent]
})
export class ComponentsModule {}
