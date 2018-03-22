import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AuthProvider } from "../../../providers/auth/auth";

@IonicPage()
@Component({
  selector: 'page-problem',
  templateUrl: 'problem.html',
})
export class ProblemPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private modalCtrl: ModalController,
    public auth: AuthProvider) {
  }

  openVideoModal(video: string) {
    var data: any;

    switch (video) {
      case "fed-up":
        data = {
          name: "Fed Up",
          url:
            "https://firebasestorage.googleapis.com/v0/b/getfreeglobal.appspot.com/o/videos%2FFED-UP-Official-Trailer-YouTube-480p.mp4?alt=media&token=b29dcd52-8eb3-4b2e-8c26-dfbb97fac2f8"
        };
        break;

      case "food-matters":
        data = {
          name: "Food Matters",
          url:
            "https://firebasestorage.googleapis.com/v0/b/getfreeglobal.appspot.com/o/videos%2FFood-Matters-Official-Trailer-YouTube-360p.mp4?alt=media&token=e9822832-0ae9-4ee7-a030-8e89b846b460"
        };
        break;

      case "unhealthy-truth":
        data = {
          name: "The Unhealthy Truth",
          url:
            "https://firebasestorage.googleapis.com/v0/b/getfreeglobal.appspot.com/o/videos%2FRobyn-O39Brien-_-TEDxAustin-2011-YouTube-360p.mp4?alt=media&token=8c176a4a-b02d-4d53-98b9-c9527880bdce"
        };
        break;

      case "diets-failing":
        data = {
          name: "Why Diets Fail",
          url:
            "https://firebasestorage.googleapis.com/v0/b/getfreeglobal.appspot.com/o/videos%2FWhy-Diets-Are-Failing-Us---YouTube-(480p).mp4?alt=media&token=1c04f087-bec5-47ed-9699-99c3712aa739"
        };
        break;
    }

    const myModal = this.modalCtrl.create("VideoModalPage", data);
    myModal.present();
  }

  loadSolutionPage() {
    this.navCtrl.setRoot('SolutionPage');
  }
}

