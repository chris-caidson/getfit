import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IsaproNaturalWheyPage } from './isapro-natural-whey';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  declarations: [
    IsaproNaturalWheyPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(IsaproNaturalWheyPage),
  ],
})
export class IsaproNaturalWheyPageModule {}
