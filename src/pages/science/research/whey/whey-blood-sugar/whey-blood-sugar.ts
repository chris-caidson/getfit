import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../../../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-whey-blood-sugar',
  templateUrl: 'whey-blood-sugar.html',
})
export class WheyBloodSugarPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public auth: AuthProvider) {
  }

  goBack() {
    this.navCtrl.pop();
  }

}
