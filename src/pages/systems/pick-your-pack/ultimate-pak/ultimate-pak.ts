import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from "../../../../providers/auth/auth";
import { PdfProvider } from "../../../../providers/pdf/pdf";

@IonicPage()
@Component({
  selector: 'page-ultimate-pak',
  templateUrl: 'ultimate-pak.html',
})
export class UltimatePakPage {
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
