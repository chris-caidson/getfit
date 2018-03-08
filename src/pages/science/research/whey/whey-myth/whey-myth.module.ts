import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WheyMythPage } from './whey-myth';
import { ComponentsModule } from './../../../../../components/components.module';

@NgModule({
  declarations: [
    WheyMythPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(WheyMythPage),
  ],
})
export class WheyMythPageModule {}
