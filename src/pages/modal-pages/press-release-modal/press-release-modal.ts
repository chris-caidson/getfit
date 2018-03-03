import { Component } from "@angular/core";
import { IonicPage, ViewController, NavParams } from "ionic-angular";
import {
  DomSanitizer,
  SafeResourceUrl,
  SafeHtml
} from "@angular/platform-browser";

@IonicPage()
@Component({
  selector: "page-press-release-modal",
  templateUrl: "press-release-modal.html"
})
export class PressReleaseModalPage {
  title: string;
  imgUrl: SafeResourceUrl;
  content: SafeHtml;
  isoDate: Date;

  constructor(
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private sanitizer: DomSanitizer
  ) {}

  ionViewWillLoad() {
    this.title = this.navParams.get("title");
    this.isoDate = this.navParams.get("isoDate");
    this.imgUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.navParams.get("imgUrl"));
    this.content = this.sanitizer.bypassSecurityTrustHtml(this.navParams.get("content"));
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }
}
