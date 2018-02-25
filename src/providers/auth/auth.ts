import { Injectable } from "@angular/core";
import * as firebase from "firebase";

@Injectable()
export class AuthProvider {
  private localStorageKey: string = "gfLoggedIn";

  incorrectPassword: boolean = false;
  previousPage: string = "HomePage";
  loggedIn: boolean = localStorage.getItem(this.localStorageKey) != null;
  count: number = 0;

  constructor() {
    firebase.initializeApp({
      apiKey: "AIzaSyAwmiv0EFdJvwg5gDspSPiFZHirOD8tnBE",
      authDomain: "getfitglobal-bbef0.firebaseapp.com",
      databaseURL: "https://getfitglobal-bbef0.firebaseio.com",
      projectId: "getfitglobal-bbef0",
      storageBucket: "",
      messagingSenderId: "68846033010"
    });
  }

  public login(password: string) {
    firebase
      .auth()
      .signInWithEmailAndPassword("default_user@getfit.com", password)
      .then(() => {
        this.loggedIn = true;
        this.incorrectPassword = false;
        localStorage.setItem(this.localStorageKey, "true");
      })
      .catch(() => {
        this.loggedIn = false;
        this.incorrectPassword = true;
      });
  }
}
