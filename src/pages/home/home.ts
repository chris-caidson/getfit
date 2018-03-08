import { Component, ViewChild, HostListener } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, Platform } from 'ionic-angular';
import { AuthProvider } from "../../providers/auth/auth";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  spacer: number = 320;
  year: number = (new Date()).getFullYear();
  @ViewChild(Slides) slides: Slides;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public auth: AuthProvider,
    private platform: Platform) {
  }

  ionViewDidLoad() {
    this.platform.ready().then((readySource) => {
      this.slides.slidesPerView =this.platform.width() / this.spacer;
    });
  }

  onResize(event) {
    const innerWidth = event.target.innerWidth;

    this.slides.slidesPerView = innerWidth / this.spacer;
 }
}
