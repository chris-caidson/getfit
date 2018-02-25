import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KidsSolutionPage } from './kids-solution';
import { ComponentsModule } from './../../../components/components.module';

@NgModule({
  declarations: [
    KidsSolutionPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(KidsSolutionPage),
  ],
})
export class KidsSolutionPageModule {}
