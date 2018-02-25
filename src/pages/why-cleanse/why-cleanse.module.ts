import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WhyCleansePage } from './why-cleanse';
import { ComponentsModule } from './../../components/components.module';

@NgModule({
  declarations: [
    WhyCleansePage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(WhyCleansePage),
  ],
})
export class WhyCleansePageModule {}
