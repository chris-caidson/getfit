import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NatalieCPage } from './natalie-c';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  declarations: [
    NatalieCPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(NatalieCPage),
  ],
})
export class NatalieCPageModule {}
