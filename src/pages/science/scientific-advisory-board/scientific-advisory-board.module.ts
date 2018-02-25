import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScientificAdvisoryBoardPage } from './scientific-advisory-board';
import { ComponentsModule } from './../../../components/components.module';

@NgModule({
  declarations: [
    ScientificAdvisoryBoardPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ScientificAdvisoryBoardPage),
  ],
})
export class ScientificAdvisoryBoardPageModule {}
