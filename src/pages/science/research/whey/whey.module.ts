import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WheyPage } from './whey';
import { ComponentsModule } from './../../../../components/components.module';

@NgModule({
  declarations: [
    WheyPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(WheyPage),
  ],
})
export class WheyPageModule {}
