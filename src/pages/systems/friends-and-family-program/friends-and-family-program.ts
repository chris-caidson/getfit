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
      name: "You + 2, Them + 2",
      url:
        "https://firebasestorage.googleapis.com/v0/b/getfitglobal-bbef0.appspot.com/o/mp4s%2Fyou-plus-two-them-plus-two.mp4?alt=media&token=49d56d54-ba00-47fd-aa4b-1ac1fd1dadad"
    });

    myModal.present();
  }

}
