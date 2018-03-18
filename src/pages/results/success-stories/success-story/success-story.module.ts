import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SuccessStoryPage } from './success-story';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  declarations: [
    SuccessStoryPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(SuccessStoryPage),
  ],
})
export class SuccessStoryPageModule {}
