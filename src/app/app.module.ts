import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { HttpModule } from '@angular/http';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PdfProvider } from '../providers/pdf/pdf';
import { AuthProvider } from '../providers/auth/auth';
import { Person_2015Provider } from '../providers/person-2015/person-2015';
import { Person_2014Provider } from '../providers/person-2014/person-2014';
import { Person_2013Provider } from '../providers/person-2013/person-2013';
import { Person_2012Provider } from '../providers/person-2012/person-2012';
import { Person_2011Provider } from '../providers/person-2011/person-2011';
import { Person_2010Provider } from '../providers/person-2010/person-2010';
import { Person_2009Provider } from '../providers/person-2009/person-2009';
import { Person_2008Provider } from '../providers/person-2008/person-2008';
import { Person_2007Provider } from '../providers/person-2007/person-2007';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    InAppBrowser,
    PdfProvider,
    AuthProvider,
    PdfProvider,
    Person_2015Provider,
    Person_2014Provider,
    Person_2013Provider,
    Person_2012Provider,
    Person_2011Provider,
    Person_2010Provider,
    Person_2009Provider,
    Person_2008Provider,
    Person_2007Provider,
    { provide: LocationStrategy, useClass: PathLocationStrategy },
  ]
})
export class AppModule {}
