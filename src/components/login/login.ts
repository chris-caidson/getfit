import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginComponent {

  password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public authProvider: AuthProvider) {
  }

  public login()
  {
    this.authProvider.login(this.password);
  }
}
