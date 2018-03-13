import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DairyFreeIsaleanPage } from './dairy-free-isalean';
import { ComponentsModule } from './../../../../components/components.module';

@NgModule({
  declarations: [
    DairyFreeIsaleanPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(DairyFreeIsaleanPage),
  ],
})
export class DairyFreeIsaleanPageModule {}
