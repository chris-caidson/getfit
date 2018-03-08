import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../../../providers/auth/auth';
import { PdfProvider } from "../../../../providers/pdf/pdf";

@IonicPage()
@Component({
  selector: 'page-new-zealand-whey',
  templateUrl: 'new-zealand-whey.html',
})
export class NewZealandWheyPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public pdfProvider: PdfProvider,
    public auth: AuthProvider) {
  }

  goBack() {
    this.navCtrl.pop();
  }

}
