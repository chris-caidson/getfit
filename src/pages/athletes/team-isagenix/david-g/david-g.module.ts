import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DavidGPage } from './david-g';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  declarations: [
    DavidGPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(DavidGPage),
  ],
})
export class DavidGPageModule {}
