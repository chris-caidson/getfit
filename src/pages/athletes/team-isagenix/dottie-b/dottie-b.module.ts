import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DottieBPage } from './dottie-b';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  declarations: [
    DottieBPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(DottieBPage),
  ],
})
export class DottieBPageModule {}
