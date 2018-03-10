import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from "../../../providers/auth/auth";
import { PdfProvider } from '../../../providers/pdf/pdf';

@IonicPage()
@Component({
  selector: 'page-staying-healthy',
  templateUrl: 'staying-healthy.html',
})
export class StayingHealthyPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public pdfProvider: PdfProvider,
    public auth: AuthProvider) {
  }

  loadPage(pageName: string){
    this.navCtrl.push(pageName);
  }
}
