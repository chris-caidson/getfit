import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AthleticAdaptogensPage } from './athletic-adaptogens';
import { ComponentsModule } from './../../../../../components/components.module';

@NgModule({
  declarations: [
    AthleticAdaptogensPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(AthleticAdaptogensPage),
  ],
})
export class AthleticAdaptogensPageModule {}
