import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JanaPPage } from './jana-p';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  declarations: [
    JanaPPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(JanaPPage),
  ],
})
export class JanaPPageModule {}
