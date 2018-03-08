import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SevilleKPage } from './seville-k';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  declarations: [
    SevilleKPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(SevilleKPage),
  ],
})
export class SevilleKPageModule {}
