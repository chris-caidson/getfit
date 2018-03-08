import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WheyBloodSugarPage } from './whey-blood-sugar';
import { ComponentsModule } from './../../../../../components/components.module';

@NgModule({
  declarations: [
    WheyBloodSugarPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(WheyBloodSugarPage),
  ],
})
export class WheyBloodSugarPageModule {}
