import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from "../../../providers/auth/auth";

@IonicPage()
@Component({
  selector: 'page-mythbuster',
  templateUrl: 'mythbuster.html',
})
export class MythbusterPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public auth: AuthProvider) {
  }

}
