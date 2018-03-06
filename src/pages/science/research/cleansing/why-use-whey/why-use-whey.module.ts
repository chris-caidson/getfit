import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WhyUseWheyPage } from './why-use-whey';
import { ComponentsModule } from './../../../../../components/components.module';

@NgModule({
  declarations: [
    WhyUseWheyPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(WhyUseWheyPage),
  ],
})
export class WhyUseWheyPageModule { }
