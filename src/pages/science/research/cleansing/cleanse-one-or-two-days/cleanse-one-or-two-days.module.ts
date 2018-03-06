import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CleanseOneOrTwoDaysPage } from './cleanse-one-or-two-days';
import { ComponentsModule } from './../../../../../components/components.module';

@NgModule({
  declarations: [
    CleanseOneOrTwoDaysPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(CleanseOneOrTwoDaysPage),
  ],
})
export class CleanseOneOrTwoDaysPageModule {}
