import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AuthProvider } from "../../../providers/auth/auth";

@IonicPage()
@Component({
  selector: 'page-mythbuster',
  templateUrl: 'mythbuster.html',
})
export class MythbusterPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private modalCtrl: ModalController,
    public auth: AuthProvider) {
  }

  openVideoModal(video: string) {
    var data: any;

    switch (video) {
      case "bodybuilders":
        data = {
          name: "Myth: Whey Protein Is Only for Bodybuilders and Athletes",
          url:
            "https://firebasestorage.googleapis.com/v0/b/getfitglobal-bbef0.appspot.com/o/mp4s%2Fmyth-whey-protein-is-only-for-bodybuilders-and-athletes.mp4?alt=media&token=a1eaaccb-d90a-401a-94b4-ca4f1563a52b"
        };
        break;

        case "supplements":
        data = {
          name: "Myth: Dietary Supplements Are Not Regulated",
          url:
            "https://firebasestorage.googleapis.com/v0/b/getfitglobal-bbef0.appspot.com/o/mp4s%2Fmyth-dietary-supplements-are-not-regulated.mp4?alt=media&token=466b247c-2ab6-4fc3-83db-d29b35139383"
        };
        break;

        case "metabolism":
        data = {
          name: "Myth: Your Metabolism Will Slow with Weight Loss",
          url:
            "https://firebasestorage.googleapis.com/v0/b/getfitglobal-bbef0.appspot.com/o/mp4s%2Fmyth-your-metabolism-will-slow-with-weight-loss.mp4?alt=media&token=2860458e-f241-4339-8b15-fd3c7b4c2275"
        };
        break;

        case "skinny":
        data = {
          name: "Myth: Skinny Equals Healthy",
          url:
            "https://firebasestorage.googleapis.com/v0/b/getfitglobal-bbef0.appspot.com/o/mp4s%2Fmyth-skinny-equals-healthy.mp4?alt=media&token=46e8ac5b-4a77-4f95-87be-db2fac4b2497"
        };
        break;

        case "antioxidants":
        data = {
          name: "Myth: All Antioxidants Are the Same",
          url:
            "https://firebasestorage.googleapis.com/v0/b/getfitglobal-bbef0.appspot.com/o/mp4s%2Fmyth-all-antioxidants-are-the-same.mp4?alt=media&token=b9bf8795-3565-49a1-976d-75e4716294b6"
        };
        break;

        case "protein":
        data = {
          name: "Myth: All Protein Is the Same",
          url:
            "https://firebasestorage.googleapis.com/v0/b/getfitglobal-bbef0.appspot.com/o/mp4s%2Fmyth-all-protein-is-the-same.mp4?alt=media&token=13675978-c15d-4f82-93ea-c7d7250a179b"
        };
        break;

        case "carbs":
        data = {
          name: "Myth: All Carbs Are Bad for You",
          url:
            "https://firebasestorage.googleapis.com/v0/b/getfitglobal-bbef0.appspot.com/o/mp4s%2Fmyth-all-carbs-are-bad-for-you.mp4?alt=media&token=06294b32-b008-48c6-a3aa-3b1aa124319a"
        };
        break;
    }

    const myModal = this.modalCtrl.create("VideoModalPage", data);
    myModal.present();
  }
}
