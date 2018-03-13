import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AuthProvider } from "../../../../providers/auth/auth";
import { PdfProvider } from "../../../../providers/pdf/pdf";

@IonicPage()
@Component({
  selector: 'page-amped-nox',
  templateUrl: 'amped-nox.html',
})
export class AmpedNoxPage {

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
      case "amplify-workout":
        data = {
          name: "Amplify Your Workout",
          url:
            "https://firebasestorage.googleapis.com/v0/b/getfitglobal-bbef0.appspot.com/o/mp4s%2Famplify-your-workout.mp4?alt=media&token=30475fd8-4eb6-4018-9ac9-3ff65b3a56a7"
        };
        break;

      case "amped-line":
        data = {
          name: "The Isagenix Amped Line",
          url:
            "https://firebasestorage.googleapis.com/v0/b/getfitglobal-bbef0.appspot.com/o/mp4s%2Fthe-isagenix-amped-line.mp4?alt=media&token=3be395b3-3aea-4221-87c9-6e6f804d6d60"
        }
        break;
    }

    const myModal = this.modalCtrl.create("VideoModalPage", data);
    myModal.present();
  }

}
