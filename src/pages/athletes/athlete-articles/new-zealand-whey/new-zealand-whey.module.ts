import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewZealandWheyPage } from './new-zealand-whey';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  declarations: [
    NewZealandWheyPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(NewZealandWheyPage),
  ],
})
export class NewZealandWheyPageModule {}
