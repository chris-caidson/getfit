import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TiffDPage } from './tiff-d';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  declarations: [
    TiffDPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(TiffDPage),
  ],
})
export class TiffDPageModule {}
