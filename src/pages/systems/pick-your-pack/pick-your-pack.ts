import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from "../../../providers/auth/auth";

@IonicPage()
@Component({
  selector: 'page-pick-your-pack',
  templateUrl: 'pick-your-pack.html',
})
export class PickYourPackPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public auth: AuthProvider) {
  }

  load30DaySystemPage(){
    this.navCtrl.push('ThirtyDaySystemPage');
  }

  loadValuePakPage(){
    this.navCtrl.push('ValuePakPage');
  }

  loadUltimatePakPage(){
    this.navCtrl.push('UltimatePakPage');
  }
}
