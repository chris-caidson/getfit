import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FiveReasonsPage } from './five-reasons';

@NgModule({
  declarations: [
    FiveReasonsPage,
  ],
  imports: [
    IonicPageModule.forChild(FiveReasonsPage),
  ],
})
export class FiveReasonsPageModule {}
