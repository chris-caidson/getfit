import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SolutionPage } from './solution';
import { ComponentsModule } from './../../../components/components.module';

@NgModule({
  declarations: [
    SolutionPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(SolutionPage),
  ],
})
export class SolutionPageModule {}
