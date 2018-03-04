import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SciencePage } from './science';
import { ComponentsModule } from './../../../components/components.module';

@NgModule({
  declarations: [
    SciencePage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(SciencePage),
  ],
})
export class SciencePageModule {}
