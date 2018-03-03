import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AuthProvider } from "../../../../providers/auth/auth";
import { PdfProvider } from "../../../../providers/pdf/pdf";

@IonicPage()
@Component({
  selector: 'page-ionix-supreme',
  templateUrl: 'ionix-supreme.html',
})
export class IonixSupremePage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private modalCtrl: ModalController,
    public pdfProvider: PdfProvider,
    public auth: AuthProvider) {
  }

  openVideoModal() {
    const myModal = this.modalCtrl.create("VideoModalPage", {
      name: "The Science Behind Adaptogens",
      url:
        "https://firebasestorage.googleapis.com/v0/b/getfreeglobal.appspot.com/o/videos%2Fthe-science-behind-adaptogens.mp4?alt=media&token=855599c3-c597-45b7-bcfa-50e9275051fa"
    });

    myModal.present();
  }

  goBack() {
    this.navCtrl.pop();
  }
}
