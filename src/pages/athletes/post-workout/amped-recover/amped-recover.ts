import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from "../../../../providers/auth/auth";

@IonicPage()
@Component({
  selector: 'page-amped-recover',
  templateUrl: 'amped-recover.html',
})
export class AmpedRecoverPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public auth: AuthProvider) {
  }

}
