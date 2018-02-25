import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PickYourPackPage } from './pick-your-pack';

@NgModule({
  declarations: [
    PickYourPackPage,
  ],
  imports: [
    IonicPageModule.forChild(PickYourPackPage),
  ],
})
export class PickYourPackPageModule {}
