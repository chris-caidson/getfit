import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JjBPage } from './jj-b';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  declarations: [
    JjBPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(JjBPage),
  ],
})
export class JjBPageModule {}
