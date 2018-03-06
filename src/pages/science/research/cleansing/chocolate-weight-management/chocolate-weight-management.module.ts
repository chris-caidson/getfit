import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChocolateWeightManagementPage } from './chocolate-weight-management';
import { ComponentsModule } from './../../../../../components/components.module';

@NgModule({
  declarations: [
    ChocolateWeightManagementPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ChocolateWeightManagementPage),
  ],
})
export class ChocolateWeightManagementPageModule {}
