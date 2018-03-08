import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../../../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-protein-after-cleanse-day',
  templateUrl: 'protein-after-cleanse-day.html',
})
export class ProteinAfterCleanseDayPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public auth: AuthProvider) {
  }

  goBack() {
    this.navCtrl.pop();
  }

}
