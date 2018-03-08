import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EatingLessPage } from './eating-less';
import { ComponentsModule } from './../../../../../components/components.module';

@NgModule({
  declarations: [
    EatingLessPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(EatingLessPage),
  ],
})
export class EatingLessPageModule {}
