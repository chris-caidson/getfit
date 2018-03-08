import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShaneFPage } from './shane-f';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  declarations: [
    ShaneFPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ShaneFPage),
  ],
})
export class ShaneFPageModule {}
