import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AmpedPage } from './amped';
import { ComponentsModule } from './../../../components/components.module';

@NgModule({
  declarations: [
    AmpedPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(AmpedPage),
  ],
})
export class AmpedPageModule {}
