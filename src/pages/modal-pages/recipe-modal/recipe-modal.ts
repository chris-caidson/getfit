import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-recipe-modal',
  templateUrl: 'recipe-modal.html',
})
export class RecipeModalPage {
  title: string;
  imgSrc: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewWillLoad() {
    this.title = this.navParams.get("title");
    this.imgSrc = this.navParams.get("imgSrc");
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }
}
