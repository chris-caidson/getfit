import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NeilBPage } from './neil-b';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  declarations: [
    NeilBPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(NeilBPage),
  ],
})
export class NeilBPageModule {}
