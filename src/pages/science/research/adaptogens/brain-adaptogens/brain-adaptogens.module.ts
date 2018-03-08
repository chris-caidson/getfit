import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BrainAdaptogensPage } from './brain-adaptogens';
import { ComponentsModule } from './../../../../../components/components.module';

@NgModule({
  declarations: [
    BrainAdaptogensPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(BrainAdaptogensPage),
  ],
})
export class BrainAdaptogensPageModule {}
