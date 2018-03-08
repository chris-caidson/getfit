import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhobicStressPage } from './phobic-stress';
import { ComponentsModule } from './../../../../../components/components.module';

@NgModule({
  declarations: [
    PhobicStressPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(PhobicStressPage),
  ],
})
export class PhobicStressPageModule {}
