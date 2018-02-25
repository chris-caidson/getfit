import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AmpedFuelPage } from './amped-fuel';
import { ComponentsModule } from './../../../../components/components.module';

@NgModule({
  declarations: [
    AmpedFuelPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(AmpedFuelPage),
  ],
})
export class AmpedFuelPageModule {}
