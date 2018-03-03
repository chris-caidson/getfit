import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AuthProvider } from "../../../../providers/auth/auth";
import { PdfProvider } from "../../../../providers/pdf/pdf";

@IonicPage()
@Component({
  selector: 'page-isalean-shake',
  templateUrl: 'isalean-shake.html',
})
export class IsaleanShakePage {
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
            "https://firebasestorage.googleapis.com/v0/b/getfreeglobal.appspot.com/o/videos%2FHow%20to%20Do%20a%20Shake%20Day.mp4?alt=media&token=91c8c511-4bb2-42db-8460-41bb46a76d59"
        };
        break;

      case "presentation":
        data = {
          name: "IsaLean Shake Presentation",
          url:
            "https://firebasestorage.googleapis.com/v0/b/getfreeglobal.appspot.com/o/videos%2Fisalean-shake-presentation.mp4?alt=media&token=dbfce094-1133-4225-996b-67d1f7b5aaed"
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
