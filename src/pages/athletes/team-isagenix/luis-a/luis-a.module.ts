import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LuisAPage } from './luis-a';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  declarations: [
    LuisAPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(LuisAPage),
  ],
})
export class LuisAPageModule {}
