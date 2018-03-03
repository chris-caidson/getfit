import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AuthProvider } from "../../../../providers/auth/auth";
import { PdfProvider } from "../../../../providers/pdf/pdf";

@IonicPage()
@Component({
  selector: 'page-product-b',
  templateUrl: 'product-b.html',
})
export class ProductBPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private modalCtrl: ModalController,
    public pdfProvider: PdfProvider,
    public auth: AuthProvider) {
  }

  openVideoModal(video: string) {
    var data: any;

    switch (video) {
      case "telomeres":
        data = {
          name: "Telomeres and Aging",
          url:
            "https://firebasestorage.googleapis.com/v0/b/getfreeglobal.appspot.com/o/videos%2Ftelomeres-and-aging.mp4?alt=media&token=615d0ec4-be6f-452e-afb7-c59363c883c9"
        };
        break;

      case "aging-you":
        data = {
          name: "What's Aging You?",
          url:
            "https://firebasestorage.googleapis.com/v0/b/getfreeglobal.appspot.com/o/videos%2Fwhat's-aging-you.mp4?alt=media&token=c569cd40-819a-4772-ba58-50424bb7c970"
        };
        break;
    }

    const myModal = this.modalCtrl.create("VideoModalPage", data);
    myModal.present();
  }

  goBack() {
    this.navCtrl.pop();
  }

}
