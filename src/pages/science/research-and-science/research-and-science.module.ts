import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResearchAndSciencePage } from './research-and-science';
import { ComponentsModule } from './../../../components/components.module';

@NgModule({
  declarations: [
    ResearchAndSciencePage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ResearchAndSciencePage),
  ],
})
export class ResearchAndSciencePageModule {}
