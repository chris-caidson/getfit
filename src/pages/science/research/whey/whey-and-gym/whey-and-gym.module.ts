import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WheyAndGymPage } from './whey-and-gym';
import { ComponentsModule } from '../../../../../components/components.module';

@NgModule({
  declarations: [
    WheyAndGymPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(WheyAndGymPage),
  ],
})
export class WheyAndGymPageModule {}
