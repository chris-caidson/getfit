import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DrBrekhmanPage } from './dr-brekhman';
import { ComponentsModule } from './../../../../../components/components.module';

@NgModule({
  declarations: [
    DrBrekhmanPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(DrBrekhmanPage),
  ],
})
export class DrBrekhmanPageModule {}
