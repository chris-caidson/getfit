import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AuthProvider } from "../../../../providers/auth/auth";
import { PdfProvider } from "../../../../providers/pdf/pdf";

@IonicPage()
@Component({
  selector: 'page-amped-nitro',
  templateUrl: 'amped-nitro.html',
})
export class AmpedNitroPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public pdfProvider: PdfProvider,
    public auth: AuthProvider) {
  }

  openVideoModal(videoName: string) {
    var data: any;

    switch (videoName) {
      case "amped-line":
        data = {
          name: "The Isagenix Amped Line",
          url:
            "https://firebasestorage.googleapis.com/v0/b/getfitglobal-bbef0.appspot.com/o/mp4s%2Fthe-isagenix-amped-line.mp4?alt=media&token=3be395b3-3aea-4221-87c9-6e6f804d6d60"
        }
        break;

      case "amped-nitro":
        data = {
          name: "AMPED Nitro",
          url:
            "https://firebasestorage.googleapis.com/v0/b/getfitglobal-bbef0.appspot.com/o/mp4s%2Famped-nitro.mp4?alt=media&token=5b424e4e-c882-4273-bfc8-09b207b29e91"
        };
        break;

      case "amped-nitro-science":
        data = {
          name: "The Science Behind AMPED Nitro",
          url:
            "https://firebasestorage.googleapis.com/v0/b/getfitglobal-bbef0.appspot.com/o/mp4s%2Famped-nitro-science-behind.mp4?alt=media&token=bc7af1fd-a402-4349-b169-cf5cc8aa7301"
        }
        break;

      case "amped-nitro-how-to-use":
        data = {
          name: "How to Use AMPED Nitro",
          url:
            "https://firebasestorage.googleapis.com/v0/b/getfitglobal-bbef0.appspot.com/o/mp4s%2Famped-nitro-how-to-use.mp4?alt=media&token=ad815835-eec2-44ab-8233-093fb8d57bfa"
        }
        break;
    }

    const myModal = this.modalCtrl.create("VideoModalPage", data);
    myModal.present();
  }

}
