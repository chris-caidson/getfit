import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QualityAssurancePage } from './quality-assurance';

@NgModule({
  declarations: [
    QualityAssurancePage,
  ],
  imports: [
    IonicPageModule.forChild(QualityAssurancePage),
  ],
})
export class QualityAssurancePageModule {}
