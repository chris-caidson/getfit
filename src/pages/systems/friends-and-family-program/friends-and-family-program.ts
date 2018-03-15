import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AuthProvider } from "../../../providers/auth/auth";
import { PdfProvider } from "../../../providers/pdf/pdf";

@IonicPage()
@Component({
  selector: 'page-friends-and-family-program',
  templateUrl: 'friends-and-family-program.html',
})
export class FriendsAndFamilyProgramPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public pdfProvider: PdfProvider,
    public modalCtrl: ModalController,
    public auth: AuthProvider) {
  }

  openVideoModal() {
    const myModal = this.modalCtrl.create("VideoModalPage", {
      name: "You Share, They Share, Repeat",
      url:
        "https://firebasestorage.googleapis.com/v0/b/getfitglobal-bbef0.appspot.com/o/mp4s%2Fyou-share-they-share-repeat.mp4?alt=media&token=1a989915-41c1-4ee2-90a1-4026f0c0c19b"
    });

    myModal.present();
  }

}
