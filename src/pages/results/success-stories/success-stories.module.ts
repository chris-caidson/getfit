import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SuccessStoriesPage } from './success-stories';
import { ComponentsModule } from './../../../components/components.module';

@NgModule({
  declarations: [
    SuccessStoriesPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(SuccessStoriesPage),
  ],
})
export class SuccessStoriesPageModule {}
