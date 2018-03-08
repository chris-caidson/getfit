import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IonixSupremeAdaptogensPage } from './ionix-supreme-adaptogens';
import { ComponentsModule } from './../../../../../components/components.module';

@NgModule({
  declarations: [
    IonixSupremeAdaptogensPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(IonixSupremeAdaptogensPage),
  ],
})
export class IonixSupremeAdaptogensPageModule {}
