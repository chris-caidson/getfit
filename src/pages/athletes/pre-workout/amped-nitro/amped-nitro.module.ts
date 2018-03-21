import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AmpedNitroPage } from './amped-nitro';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  declarations: [
    AmpedNitroPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(AmpedNitroPage),
  ],
})
export class AmpedNitroPageModule {}
