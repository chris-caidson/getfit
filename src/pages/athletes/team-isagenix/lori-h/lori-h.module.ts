import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoriHPage } from './lori-h';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  declarations: [
    LoriHPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(LoriHPage),
  ],
})
export class LoriHPageModule {}
