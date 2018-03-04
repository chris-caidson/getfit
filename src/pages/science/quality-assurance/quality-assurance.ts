import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from "../../../providers/auth/auth";
import { PdfProvider } from '../../../providers/pdf/pdf';

@IonicPage()
@Component({
  selector: 'page-quality-assurance',
  templateUrl: 'quality-assurance.html',
})
export class QualityAssurancePage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public auth: AuthProvider,
    public pdfProvider: PdfProvider) {
  }

  loadPage(pageName: string){
    this.navCtrl.push(pageName);
  }
}
