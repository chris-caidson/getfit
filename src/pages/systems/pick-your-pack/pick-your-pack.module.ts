import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PickYourPackPage } from './pick-your-pack';
import { ComponentsModule } from './../../../components/components.module';

@NgModule({
  declarations: [
    PickYourPackPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(PickYourPackPage),
  ],
})
export class PickYourPackPageModule {}
