import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from "../../../../../providers/auth/auth";

@IonicPage()
@Component({
  selector: 'page-nine-tips',
  templateUrl: 'nine-tips.html',
})
export class NineTipsPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public auth: AuthProvider) {
  }

  goBack() {
    this.navCtrl.pop();
  }
  
}
