import { AuthProvider } from "../providers/auth/auth";
import { Component, ViewChild } from "@angular/core";
import { Nav, Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

@Component({
  templateUrl: "app.html"
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: string = "HomePage";

  pages: Array<{
    title: string;
    component: string;
    separatorLevel: number;
    icon: string;
    indent?: boolean;
  }>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public auth: AuthProvider
  ) {
    this.initializeApp();

    this.pages = [
      // GetFit Content
      { title: "Home", component: "HomePage", separatorLevel: 4, icon: "home" },

      // Movement
      { title: "Movement", component: null, separatorLevel: 2, icon: null },
      { title: "Why Cleanse?", component: "WhyCleansePage", separatorLevel: 4, icon: "question-circle" },
      { title: "Problem", component: "ProblemPage", separatorLevel: 4, icon: "exclamation-circle" },
      { title: "Solution", component: "SolutionPage", separatorLevel: 4, icon: "check-circle" },

      // Science
      { title: "Science", component: null, separatorLevel: 2, icon: null },
      { title: "Science", component: "SciencePage", separatorLevel: 4, icon: "flask" },
      { title: "Studies", component: "StudiesPage", separatorLevel: 4, icon: "file" },
      { title: "Myth Buster", component: "MythbusterPage", separatorLevel: 4, icon: "bomb" },
      { title: "Research", component: null, separatorLevel: 3, icon: null},
      { title: "Cleansing", component: "CleansingPage", separatorLevel: 4, icon: "leaf" },
      { title: "Adaptogens", component: "AdaptogensPage", separatorLevel: 4, icon: "pagelines" },
      { title: "Whey", component: "WheyPage", separatorLevel: 4, icon: "asterisk" },
      { title: "Telomeres", component: "TelomeresPage", separatorLevel: 4, icon: "bolt" },

      // Systems
      { title: "Systems", component: null, separatorLevel: 2, icon: null },
      { title: "Systems", component: "SystemsPage", separatorLevel: 4, icon: "clone" },
      { title: "Core 4", component: "Core4Page", separatorLevel: 4, icon: "th-large" },
      { title: "Cleanse", component: "CleanseForLifePage", separatorLevel: 4, icon: "caret-right", indent: true },
      { title: "Ionix Supreme", component: "IonixSupremePage", separatorLevel: 4, icon: "caret-right", indent: true },
      { title: "Shakes", component: "IsaleanShakePage", separatorLevel: 4, icon: "caret-right", indent: true },
      { title: "Product B", component: "ProductBPage", separatorLevel: 4, icon: "caret-right", indent: true },
      { title: "Packs", component: "PickYourPackPage", separatorLevel: 4, icon: "archive" },
      { title: "Good", component: "ThirtyDaySystemPage", separatorLevel: 4, icon: "caret-right", indent: true },
      { title: "Better", component: "ValuePakPage", separatorLevel: 4, icon: "caret-right", indent: true },
      { title: "Best", component: "UltimatePakPage", separatorLevel: 4, icon: "caret-right", indent: true },
      //{ title: "Kosher", component: "KosherProductsPakPage", separatorLevel: 4, icon: "caret-right", indent: true },
      //{ title: "Vegan", component: "DairyFreeIsaleanShakePage", separatorLevel: 4, icon: "caret-right", indent: true },
      { title: "Friends & Fam.", component: "FriendsAndFamilyProgramPage", separatorLevel: 4, icon: "usd" },

      // Athletes
      { title: "Athletes", component: null, separatorLevel: 2, icon: null },
      { title: "Team Isagenix", component: "AthletesPage", separatorLevel: 4, icon: "users" },
      { title: "Research", component: "AthleteArticlesPage", separatorLevel: 4, icon: "book" },
      { title: "Sports Science", component: "AmpedPage", separatorLevel: 4, icon: "bicycle" },
      { title: "Pre-Workout", component: null, separatorLevel: 3, icon: null },
      { title: "Amped Power", component: "AmpedPowerPage", separatorLevel: 4, icon: "plug" },
      { title: "Amped NOx", component: "AmpedNoxPage", separatorLevel: 4, icon: "fire" },
      { title: "Mid-Workout", component: null, separatorLevel: 3, icon: null },
      { title: "Amped Fuel", component: "AmpedFuelPage", separatorLevel: 4, icon: "battery-three-quarters" },
      { title: "Post-Workout", component: null, separatorLevel: 3, icon: null },
      { title: "Amped Recover", component: "AmpedRecoverPage", separatorLevel: 4, icon: "bed" },
      { title: "IsaLean Pro", component: "IsaleanProShakePage", separatorLevel: 4, icon: "superpowers" },

      // Kids
      { title: "Kids", component: null, separatorLevel: 2, icon: null },
      { title: "Problem", component: "KidsPage", separatorLevel: 4, icon: "exclamation" },
      { title: "Solution", component: "KidsSolutionPage", separatorLevel: 4, icon: "check" },

      // Results
      { title: "Results", component: null, separatorLevel: 2, icon: null },
      { title: "IsaBody Challenge", component: "IsabodyChallengePage", separatorLevel: 4, icon: "trophy" },
      { title: "Success Stories", component: "SuccessStoriesPage", separatorLevel: 4, icon: "comments" },
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(pageName) {
    this.nav.setRoot(pageName);
  }
}
