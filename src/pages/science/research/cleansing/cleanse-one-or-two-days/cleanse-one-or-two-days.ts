import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from "../../../../../providers/auth/auth";

@IonicPage()
@Component({
  selector: 'page-cleanse-one-or-two-days',
  templateUrl: 'cleanse-one-or-two-days.html',
})
export class CleanseOneOrTwoDaysPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public auth: AuthProvider) {
  }

  goBack() {
    this.navCtrl.pop();
  }
}
