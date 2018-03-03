import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QualityAssurancePage } from './quality-assurance';
import { ComponentsModule } from './../../../components/components.module';

@NgModule({
  declarations: [
    QualityAssurancePage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(QualityAssurancePage),
  ],
})
export class QualityAssurancePageModule {}
