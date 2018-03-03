import { Component } from "@angular/core";
import { IonicPage, NavParams, ViewController } from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-video-modal",
  templateUrl: "video-modal.html"
})
export class VideoModalPage {
  videoName: string;
  videoUrl: string;

  constructor(private navParams: NavParams, private viewCtrl: ViewController) {}

  ionViewWillLoad() {
    this.videoName = this.navParams.get("name");
    this.videoUrl = this.navParams.get("url");
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }
}
