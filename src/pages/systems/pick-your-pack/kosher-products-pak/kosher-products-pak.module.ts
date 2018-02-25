import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KosherProductsPakPage } from './kosher-products-pak';
import { ComponentsModule } from './../../../../components/components.module';

@NgModule({
  declarations: [
    KosherProductsPakPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(KosherProductsPakPage),
  ],
})
export class KosherProductsPakPageModule {}
