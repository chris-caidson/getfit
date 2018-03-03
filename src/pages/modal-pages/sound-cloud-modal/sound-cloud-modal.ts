import { Component, ViewChild } from "@angular/core";
import { IonicPage, NavParams, ViewController } from "ionic-angular";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

@IonicPage()
@Component({
  selector: "page-sound-cloud-modal",
  templateUrl: "sound-cloud-modal.html"
})
export class SoundCloudModalPage {
  title: string;
  url: SafeResourceUrl;

  @ViewChild("iframe") iframe;

  baseUrl: string = "https://w.soundcloud.com/player?url=https://soundcloud.com/";

  queryString: string = "&amp;color=75c043&amp;auto_play=true&amp;hide_related=true&amp;show_comments=false&amp;" +
    "show_user=false&amp;start_track=0&amp;show_playcount=true&amp;show_artwork=true&amp;buying=false&amp;download=false" +
    "&amp;liking=true&amp;sharing=false&amp;show_reposts=false";

  constructor(
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private sanitizer: DomSanitizer
  ) {}

  ionViewWillLoad() {
    this.title = this.navParams.get("title");
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(
      `${this.baseUrl}${this.navParams.get("url")}${this.queryString}`
    );
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }
}
