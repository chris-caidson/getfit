import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TalesOfTelomeresPage } from './tales-of-telomeres';
import { ComponentsModule } from './../../../../../components/components.module';

@NgModule({
  declarations: [
    TalesOfTelomeresPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(TalesOfTelomeresPage),
  ],
})
export class TalesOfTelomeresPageModule {}
