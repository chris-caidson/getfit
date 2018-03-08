import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WheyTwiceADayPage } from './whey-twice-a-day';
import { ComponentsModule } from '../../../../../components/components.module';

@NgModule({
  declarations: [
    WheyTwiceADayPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(WheyTwiceADayPage),
  ],
})
export class WheyTwiceADayPageModule {}
