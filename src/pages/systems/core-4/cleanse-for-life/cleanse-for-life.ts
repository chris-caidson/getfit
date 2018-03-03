import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AuthProvider } from "../../../../providers/auth/auth";
import { PdfProvider } from "../../../../providers/pdf/pdf";

@IonicPage()
@Component({
  selector: 'page-cleanse-for-life',
  templateUrl: 'cleanse-for-life.html',
})
export class CleanseForLifePage {
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
      case "cleanse-day":
        data = {
          name: "How to do an Isagenix Cleanse Day",
          url:
            "https://firebasestorage.googleapis.com/v0/b/getfreeglobal.appspot.com/o/videos%2FHow%20to%20Do%20a%20Cleanse%20Day.mp4?alt=media&token=d7b2ac9d-17ed-48c6-98d0-860b65bbd8fa"
        };
        break;

      case "product-info":
        data = {
          name: "Cleanse for Life Product Information",
          url:
            "https://firebasestorage.googleapis.com/v0/b/getfreeglobal.appspot.com/o/videos%2Fcleanse-for-life-product-info.mp4?alt=media&token=f3b21be1-e0fc-4be0-9064-e03aa5dfcf09"
        };
        break;

        case "on-the-go":
        data = {
          name: "Cleanse for Life Info on the Go",
          url:
            "https://firebasestorage.googleapis.com/v0/b/getfreeglobal.appspot.com/o/videos%2Fcleanse-for-life-info-on-the-go.mp4?alt=media&token=17661426-2880-423f-b076-e9eaefd8fbbf"
        };
    }

    const myModal = this.modalCtrl.create("VideoModalPage", data);
    myModal.present();
  }

  goBack() {
    this.navCtrl.pop();
  }
}
