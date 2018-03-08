import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LindseySPage } from './lindsey-s';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  declarations: [
    LindseySPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(LindseySPage),
  ],
})
export class LindseySPageModule {}
