import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FiveReasonsPage } from './five-reasons';
import { ComponentsModule } from './../../../components/components.module';

@NgModule({
  declarations: [
    FiveReasonsPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(FiveReasonsPage),
  ],
})
export class FiveReasonsPageModule {}
