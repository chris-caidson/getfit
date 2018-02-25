import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProblemPage } from './problem';
import { ComponentsModule } from './../../../components/components.module';

@NgModule({
  declarations: [
    ProblemPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ProblemPage),
  ],
})
export class ProblemPageModule {}
