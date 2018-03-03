import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AuthProvider } from "../../../providers/auth/auth";

@IonicPage()
@Component({
  selector: 'page-solution',
  templateUrl: 'solution.html',
})
export class SolutionPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private modalCtrl: ModalController,
    public auth: AuthProvider) {
  }

  openVideoModal(video: string) {
    var data: any;

    switch (video) {
      case "toxic":
        data = {
          name: "Are You Toxic?",
          url:
            "https://firebasestorage.googleapis.com/v0/b/getfreeglobal.appspot.com/o/videos%2FAre-You-Toxic_-Isagenix-Promo-Length-YouTube-360p.mp4?alt=media&token=a6fa3b5d-b752-4a02-b382-19791d311c8a"
        };
        break;

      case "cleansing":
        data = {
          name: "Nutritional Cleansing",
          url:
            "https://firebasestorage.googleapis.com/v0/b/getfreeglobal.appspot.com/o/videos%2FMary-Evans-on-the-power-of-the-Isagenix-System---YouTube-(480p).mp4?alt=media&token=cdc6fe3f-baff-4eb3-9833-3b4d8182320f"
        };
        break;

      case "isa-works":
        data = {
          name: "Why Isagenix Works",
          url:
            "https://firebasestorage.googleapis.com/v0/b/getfreeglobal.appspot.com/o/videos%2FMichael.mp4?alt=media&token=f747bc3e-b287-47cd-a20e-9bc8bb7d1f6d"
        };
        break;
    }

    const myModal = this.modalCtrl.create("VideoModalPage", data);
    myModal.present();
  }

}
