import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from "../../providers/auth/auth";

@IonicPage()
@Component({
  selector: 'page-athletes',
  templateUrl: 'athletes.html',
})
export class AthletesPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public auth: AuthProvider) {
  }

  loadPage(pageName: string) {
    console.log(pageName);
    this.navCtrl.push(pageName);
  }

}
