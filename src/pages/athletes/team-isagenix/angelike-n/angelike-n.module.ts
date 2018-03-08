import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AngelikeNPage } from './angelike-n';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  declarations: [
    AngelikeNPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(AngelikeNPage),
  ],
})
export class AngelikeNPageModule {}
