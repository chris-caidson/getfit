import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AmpedRecoverPage } from './amped-recover';
import { ComponentsModule } from './../../../../components/components.module';

@NgModule({
  declarations: [
    AmpedRecoverPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(AmpedRecoverPage),
  ],
})
export class AmpedRecoverPageModule {}
