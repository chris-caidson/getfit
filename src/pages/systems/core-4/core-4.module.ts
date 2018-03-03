import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Core4Page } from './core-4';
import { ComponentsModule } from './../../../components/components.module';

@NgModule({
  declarations: [
    Core4Page,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(Core4Page),
  ],
})
export class Core4PageModule {}
