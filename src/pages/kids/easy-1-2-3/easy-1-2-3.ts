import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from "../../../providers/auth/auth";

@IonicPage()
@Component({
  selector: 'page-easy-1-2-3',
  templateUrl: 'easy-1-2-3.html',
})
export class Easy_1_2_3Page {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public auth: AuthProvider) {
  }

  loadPage(pageName: string){
    this.navCtrl.push(pageName);
  }
}
