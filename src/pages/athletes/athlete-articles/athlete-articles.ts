import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from "../../../providers/auth/auth";

@IonicPage()
@Component({
  selector: 'page-athlete-articles',
  templateUrl: 'athlete-articles.html',
})
export class AthleteArticlesPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public auth: AuthProvider) {
  }

  loadPage(pageName: string) {
    this.navCtrl.push(pageName);
  }

}
