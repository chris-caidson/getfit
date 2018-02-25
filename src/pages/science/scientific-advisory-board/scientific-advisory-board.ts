import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from "../../../providers/auth/auth";

@IonicPage()
@Component({
  selector: 'page-scientific-advisory-board',
  templateUrl: 'scientific-advisory-board.html',
})
export class ScientificAdvisoryBoardPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public auth: AuthProvider) {
  }
}
