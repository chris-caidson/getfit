import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AuthProvider } from "../../../../providers/auth/auth";
import { PdfProvider } from "../../../../providers/pdf/pdf";

@IonicPage()
@Component({
  selector: 'page-isalean-pro-shake',
  templateUrl: 'isalean-pro-shake.html',
})
export class IsaleanProShakePage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public pdfProvider: PdfProvider,
    public auth: AuthProvider) {
  }

  openVideoModal() {
    const myModal = this.modalCtrl.create("VideoModalPage", {
      name: "IsaLean Pro Presentation",
      url:
        "https://firebasestorage.googleapis.com/v0/b/getfitglobal-bbef0.appspot.com/o/mp4s%2Fisalean-pro.mp4?alt=media&token=7456f578-40c4-4dd6-8e3f-335079c4dd03"
    });

    myModal.present();
  }

}
