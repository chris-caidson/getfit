import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AthletesPage } from './athletes';
import { ComponentsModule } from './../../components/components.module';

@NgModule({
  declarations: [
    AthletesPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(AthletesPage),
  ],
})
export class AthletesPageModule {}
