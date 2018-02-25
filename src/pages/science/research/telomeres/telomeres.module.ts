import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TelomeresPage } from './telomeres';

@NgModule({
  declarations: [
    TelomeresPage,
  ],
  imports: [
    IonicPageModule.forChild(TelomeresPage),
  ],
})
export class TelomeresPageModule {}
