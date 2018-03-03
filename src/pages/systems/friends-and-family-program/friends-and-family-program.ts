import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from "../../../providers/auth/auth";
import { PdfProvider } from "../../../providers/pdf/pdf";

@IonicPage()
@Component({
  selector: 'page-friends-and-family-program',
  templateUrl: 'friends-and-family-program.html',
})
export class FriendsAndFamilyProgramPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public pdfProvider: PdfProvider,
    public auth: AuthProvider) {
  }

}
