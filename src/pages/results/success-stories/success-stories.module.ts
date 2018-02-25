import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SuccessStoriesPage } from './success-stories';

@NgModule({
  declarations: [
    SuccessStoriesPage,
  ],
  imports: [
    IonicPageModule.forChild(SuccessStoriesPage),
  ],
})
export class SuccessStoriesPageModule {}
