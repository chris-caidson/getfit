import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AmpedNoxPage } from './amped-nox';
import { ComponentsModule } from './../../../../components/components.module';

@NgModule({
  declarations: [
    AmpedNoxPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(AmpedNoxPage),
  ],
})
export class AmpedNoxPageModule {}
