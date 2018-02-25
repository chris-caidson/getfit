import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TelomeresPage } from './telomeres';
import { ComponentsModule } from './../../../../components/components.module';

@NgModule({
  declarations: [
    TelomeresPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(TelomeresPage),
  ],
})
export class TelomeresPageModule {}
