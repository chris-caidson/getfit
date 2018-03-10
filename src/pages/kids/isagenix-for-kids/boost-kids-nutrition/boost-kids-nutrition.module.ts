import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BoostKidsNutritionPage } from './boost-kids-nutrition';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  declarations: [
    BoostKidsNutritionPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(BoostKidsNutritionPage),
  ],
})
export class BoostKidsNutritionPageModule {}
