import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WhyCleanseForLifePage } from './why-cleanse-for-life';
import { ComponentsModule } from './../../../../../components/components.module';

@NgModule({
  declarations: [
    WhyCleanseForLifePage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(WhyCleanseForLifePage),
  ],
})
export class WhyCleanseForLifePageModule {}
