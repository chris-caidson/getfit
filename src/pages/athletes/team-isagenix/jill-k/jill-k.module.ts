import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JillKPage } from './jill-k';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  declarations: [
    JillKPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(JillKPage),
  ],
})
export class JillKPageModule {}
