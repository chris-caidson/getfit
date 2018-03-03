import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PressReleaseModalPage } from './press-release-modal';

@NgModule({
  declarations: [
    PressReleaseModalPage,
  ],
  imports: [
    IonicPageModule.forChild(PressReleaseModalPage),
  ],
})
export class PressReleaseModalPageModule {}
