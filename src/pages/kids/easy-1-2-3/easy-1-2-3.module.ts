import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Easy_1_2_3Page } from './easy-1-2-3';
import { ComponentsModule } from './../../../components/components.module';

@NgModule({
  declarations: [
    Easy_1_2_3Page,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(Easy_1_2_3Page),
  ],
})
export class Easy_1_2_3PageModule {}
