import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from "../../../providers/auth/auth";

@IonicPage()
@Component({
  selector: 'page-core-4',
  templateUrl: 'core-4.html',
})
export class Core4Page {

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
    this.navCtrl.push('ProductBPage');
  }

}
