import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from "../../providers/auth/auth";

@IonicPage()
@Component({
  selector: 'page-systems',
  templateUrl: 'systems.html',
})
export class SystemsPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public auth: AuthProvider) {
  }

  loadCleansePage(){
    this.navCtrl.push('CleanseForLifePage');
  }

  loadIonixPage(){
    this.navCtrl.push('IonixSupremePage');
  }

  loadIsaLeanPage(){
    this.navCtrl.push('IsaleanShakePage');
  }

  loadIsaGenesisPage(){
    this.navCtrl.push('IsaGenesisPage');
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
