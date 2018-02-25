import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ValuePakPage } from './value-pak';
import { ComponentsModule } from './../../../../components/components.module';

@NgModule({
  declarations: [
    ValuePakPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ValuePakPage),
  ],
})
export class ValuePakPageModule {}
