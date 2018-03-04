import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from "../../../providers/auth/auth";

@IonicPage()
@Component({
  selector: 'page-science-behind-isagenix',
  templateUrl: 'science-behind-isagenix.html',
})
export class ScienceBehindIsagenixPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public auth: AuthProvider) {
  }

  loadPage(pageName: string){
    this.navCtrl.push(pageName);
  }
}
