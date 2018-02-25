import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CleansingPage } from './cleansing';
import { ComponentsModule } from './../../../../components/components.module';

@NgModule({
  declarations: [
    CleansingPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(CleansingPage),
  ],
})
export class CleansingPageModule {}
