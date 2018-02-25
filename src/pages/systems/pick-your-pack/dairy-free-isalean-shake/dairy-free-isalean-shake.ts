import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from "../../../../providers/auth/auth";

@IonicPage()
@Component({
  selector: 'page-dairy-free-isalean-shake',
  templateUrl: 'dairy-free-isalean-shake.html',
})
export class DairyFreeIsaleanShakePage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public auth: AuthProvider) {
  }

}
