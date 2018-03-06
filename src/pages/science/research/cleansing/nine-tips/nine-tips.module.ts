import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NineTipsPage } from './nine-tips';
import { ComponentsModule } from './../../../../../components/components.module';

@NgModule({
  declarations: [
    NineTipsPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(NineTipsPage),
  ],
})
export class NineTipsPageModule {}
