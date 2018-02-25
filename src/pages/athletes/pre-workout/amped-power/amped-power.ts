import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from "../../../../providers/auth/auth";

@IonicPage()
@Component({
  selector: 'page-amped-power',
  templateUrl: 'amped-power.html',
})
export class AmpedPowerPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public auth: AuthProvider) {
  }

}
