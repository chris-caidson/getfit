import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from "../../../../../providers/auth/auth";

@IonicPage()
@Component({
  selector: 'page-dr-brekhman',
  templateUrl: 'dr-brekhman.html',
})
export class DrBrekhmanPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public auth: AuthProvider) {
  }

  goBack() {
    this.navCtrl.pop();
  }

}
