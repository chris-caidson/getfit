import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from "../../../providers/auth/auth";

@IonicPage()
@Component({
  selector: 'page-success-stories',
  templateUrl: 'success-stories.html',
})
export class SuccessStoriesPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public auth: AuthProvider) {
  }

}
