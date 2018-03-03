import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SoundCloudModalPage } from './sound-cloud-modal';

@NgModule({
  declarations: [
    SoundCloudModalPage,
  ],
  imports: [
    IonicPageModule.forChild(SoundCloudModalPage),
  ],
})
export class SoundCloudModalPageModule {}
