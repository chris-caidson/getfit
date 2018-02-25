import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from "../../../providers/auth/auth";

@IonicPage()
@Component({
  selector: 'page-research-and-science',
  templateUrl: 'research-and-science.html',
})
export class ResearchAndSciencePage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public auth: AuthProvider) {
  }

}
