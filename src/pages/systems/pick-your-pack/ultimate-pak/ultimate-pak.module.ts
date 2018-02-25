import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UltimatePakPage } from './ultimate-pak';
import { ComponentsModule } from './../../../../components/components.module';

@NgModule({
  declarations: [
    UltimatePakPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(UltimatePakPage),
  ],
})
export class UltimatePakPageModule {}
