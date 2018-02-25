import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CleanseForLifePage } from './cleanse-for-life';
import { ComponentsModule } from './../../../../components/components.module';

@NgModule({
  declarations: [
    CleanseForLifePage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(CleanseForLifePage),
  ],
})
export class CleanseForLifePageModule {}
