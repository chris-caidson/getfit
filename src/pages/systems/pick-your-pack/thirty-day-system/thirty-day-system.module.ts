import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ThirtyDaySystemPage } from './thirty-day-system';
import { ComponentsModule } from './../../../../components/components.module';

@NgModule({
  declarations: [
    ThirtyDaySystemPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ThirtyDaySystemPage),
  ],
})
export class ThirtyDaySystemPageModule {}
