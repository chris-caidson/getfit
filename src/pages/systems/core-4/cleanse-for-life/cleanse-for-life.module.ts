import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CleanseForLifePage } from './cleanse-for-life';

@NgModule({
  declarations: [
    CleanseForLifePage,
  ],
  imports: [
    IonicPageModule.forChild(CleanseForLifePage),
  ],
})
export class CleanseForLifePageModule {}
