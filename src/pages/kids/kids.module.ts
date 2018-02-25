import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KidsPage } from './kids';
import { ComponentsModule } from './../../components/components.module';

@NgModule({
  declarations: [
    KidsPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(KidsPage),
  ],
})
export class KidsPageModule {}
