import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from "../../providers/auth/auth";

@IonicPage()
@Component({
  selector: 'page-why-cleanse',
  templateUrl: 'why-cleanse.html',
})
export class WhyCleansePage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public auth: AuthProvider) {
  }

  loadProblemPage() {
    this.navCtrl.push('ProblemPage');
  }

  loadSolutionPage() {
    this.navCtrl.push('SolutionPage');
  }
}
