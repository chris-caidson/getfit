import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AmpedPowerPage } from './amped-power';
import { ComponentsModule } from './../../../../components/components.module';

@NgModule({
  declarations: [
    AmpedPowerPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(AmpedPowerPage),
  ],
})
export class AmpedPowerPageModule {}
