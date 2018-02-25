import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from "../../../../providers/auth/auth";

@IonicPage()
@Component({
  selector: 'page-amped-fuel',
  templateUrl: 'amped-fuel.html',
})
export class AmpedFuelPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public auth: AuthProvider) {
  }

}
