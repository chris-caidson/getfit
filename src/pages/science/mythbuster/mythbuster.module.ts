import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MythbusterPage } from './mythbuster';
import { ComponentsModule } from './../../../components/components.module';

@NgModule({
  declarations: [
    MythbusterPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(MythbusterPage),
  ],
})
export class MythbusterPageModule {}
