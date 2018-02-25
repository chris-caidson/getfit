import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScienceBehindIsagenixPage } from './science-behind-isagenix';
import { ComponentsModule } from './../../../components/components.module';

@NgModule({
  declarations: [
    ScienceBehindIsagenixPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ScienceBehindIsagenixPage),
  ],
})
export class ScienceBehindIsagenixPageModule {}
