import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MythbusterPage } from './mythbuster';

@NgModule({
  declarations: [
    MythbusterPage,
  ],
  imports: [
    IonicPageModule.forChild(MythbusterPage),
  ],
})
export class MythbusterPageModule {}
