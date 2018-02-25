import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IonixSupremePage } from './ionix-supreme';
import { ComponentsModule } from './../../../../components/components.module';

@NgModule({
  declarations: [
    IonixSupremePage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(IonixSupremePage),
  ],
})
export class IonixSupremePageModule {}
