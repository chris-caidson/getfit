import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EnvironmentalPollutionPage } from './environmental-pollution';
import { ComponentsModule } from './../../../../../components/components.module';

@NgModule({
  declarations: [
    EnvironmentalPollutionPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(EnvironmentalPollutionPage),
  ],
})
export class EnvironmentalPollutionPageModule {}
