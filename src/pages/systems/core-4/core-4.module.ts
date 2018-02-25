import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Core_4Page } from './core-4';
import { ComponentsModule } from './../../../components/components.module';

@NgModule({
  declarations: [
    Core_4Page,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(Core_4Page),
  ],
})
export class Core_4PageModule {}
