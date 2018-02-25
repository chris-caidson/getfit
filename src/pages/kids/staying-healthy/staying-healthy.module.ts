import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StayingHealthyPage } from './staying-healthy';
import { ComponentsModule } from './../../../components/components.module';

@NgModule({
  declarations: [
    StayingHealthyPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(StayingHealthyPage),
  ],
})
export class StayingHealthyPageModule {}
