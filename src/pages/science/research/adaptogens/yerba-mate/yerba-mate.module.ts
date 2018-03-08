import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { YerbaMatePage } from './yerba-mate';
import { ComponentsModule } from './../../../../../components/components.module';

@NgModule({
  declarations: [
    YerbaMatePage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(YerbaMatePage),
  ],
})
export class YerbaMatePageModule {}
