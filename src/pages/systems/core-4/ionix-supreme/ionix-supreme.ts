import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from "../../../../providers/auth/auth";

@IonicPage()
@Component({
  selector: 'page-ionix-supreme',
  templateUrl: 'ionix-supreme.html',
})
export class IonixSupremePage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public auth: AuthProvider) {
  }

}
