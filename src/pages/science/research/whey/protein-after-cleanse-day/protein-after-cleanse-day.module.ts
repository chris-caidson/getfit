import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProteinAfterCleanseDayPage } from './protein-after-cleanse-day';
import { ComponentsModule } from './../../../../../components/components.module';

@NgModule({
  declarations: [
    ProteinAfterCleanseDayPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ProteinAfterCleanseDayPage),
  ],
})
export class ProteinAfterCleanseDayPageModule {}
