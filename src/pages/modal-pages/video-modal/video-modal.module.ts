import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VideoModalPage } from './video-modal';

@NgModule({
  declarations: [
    VideoModalPage
  ],
  imports: [
    IonicPageModule.forChild(VideoModalPage),
  ],
})
export class VideoModalPageModule {}
