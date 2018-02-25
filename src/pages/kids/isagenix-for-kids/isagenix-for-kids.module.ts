import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IsagenixForKidsPage } from './isagenix-for-kids';
import { ComponentsModule } from './../../../components/components.module';

@NgModule({
  declarations: [
    IsagenixForKidsPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(IsagenixForKidsPage),
  ],
})
export class IsagenixForKidsPageModule {}
