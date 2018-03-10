import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from "../../../../providers/auth/auth";
@IonicPage()
@Component({
  selector: 'page-childhood-obesity-awareness',
  templateUrl: 'childhood-obesity-awareness.html',
})
export class ChildhoodObesityAwarenessPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public auth: AuthProvider) {
  }

  goBack() {
    this.navCtrl.pop();
  }

}
