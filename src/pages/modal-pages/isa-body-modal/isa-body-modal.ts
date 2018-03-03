import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ViewController,
  ModalController
} from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-isa-body-modal",
  templateUrl: "isa-body-modal.html"
})
export class IsaBodyModalPage {
  personName: string;
  location: string;
  age: number;
  height: string;
  formerWeight: string;
  weightLost: string;
  quote: string;
  imageUrl: string;
  videoUrl: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public modalCtrl: ModalController
  ) {}

  ionViewWillLoad() {
    this.personName = this.navParams.get("personName");
    this.location = this.navParams.get("location");
    this.age = this.navParams.get("age");
    this.height = this.navParams.get("height");
    this.formerWeight = this.navParams.get("formerWeight");
    this.weightLost = this.navParams.get("weightLost");
    this.quote = this.navParams.get("quote");
    this.imageUrl = this.navParams.get("imageUrl");
    this.videoUrl = this.navParams.get("videoUrl");
  }

  openVideoModal() {
    const myModal = this.modalCtrl.create("VideoModalPage", {
      name: this.personName,
      url: this.videoUrl
    });

    myModal.present();
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }
}
