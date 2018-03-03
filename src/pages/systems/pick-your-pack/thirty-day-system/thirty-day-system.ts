import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AuthProvider } from "../../../../providers/auth/auth";
import { PdfProvider } from "../../../../providers/pdf/pdf";

@IonicPage()
@Component({
  selector: 'page-thirty-day-system',
  templateUrl: 'thirty-day-system.html',
})
export class ThirtyDaySystemPage {
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
      case "shake-day":
        data = {
          name: "How to do an Isagenix Shake Day",
          url:
            "https://firebasestorage.googleapis.com/v0/b/getfreeglobal.appspot.com/o/videos%2Fhow-to-do-a-shake-day.mp4?alt=media&token=3794d722-24ce-408a-9bb7-d1479a1fc975"
        };
        break;

      case "cleanse-day":
        data = {
          name: "How to do an Isagenix Cleanse Day",
          url:
            "https://firebasestorage.googleapis.com/v0/b/getfreeglobal.appspot.com/o/videos%2Fhow-to-do-a-cleanse-day.mp4?alt=media&token=598043fc-4744-41e5-b9ed-ea4f267cbc7c"
        };
        break;

      case "30-day":
        data = {
          name: "How to Use the 30 Day System",
          url:
            "https://firebasestorage.googleapis.com/v0/b/getfreeglobal.appspot.com/o/videos%2Fhow-to-use-the-30-day-system.mp4?alt=media&token=3c8c5bd0-b6d9-4472-8243-547d1f0ea5dd"
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
