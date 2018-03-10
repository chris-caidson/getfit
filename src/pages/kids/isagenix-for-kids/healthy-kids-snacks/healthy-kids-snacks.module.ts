import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HealthyKidsSnacksPage } from './healthy-kids-snacks';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  declarations: [
    HealthyKidsSnacksPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(HealthyKidsSnacksPage),
  ],
})
export class HealthyKidsSnacksPageModule {}
