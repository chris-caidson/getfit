import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EnduranceAthletesPage } from './endurance-athletes';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  declarations: [
    EnduranceAthletesPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(EnduranceAthletesPage),
  ],
})
export class EnduranceAthletesPageModule {}
