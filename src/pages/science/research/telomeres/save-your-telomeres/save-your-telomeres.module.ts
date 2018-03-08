import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SaveYourTelomeresPage } from './save-your-telomeres';
import { ComponentsModule } from './../../../../../components/components.module';

@NgModule({
  declarations: [
    SaveYourTelomeresPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(SaveYourTelomeresPage),
  ],
})
export class SaveYourTelomeresPageModule {}
