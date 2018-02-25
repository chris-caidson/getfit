import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KidsSolutionPage } from './kids-solution';

@NgModule({
  declarations: [
    KidsSolutionPage,
  ],
  imports: [
    IonicPageModule.forChild(KidsSolutionPage),
  ],
})
export class KidsSolutionPageModule {}
