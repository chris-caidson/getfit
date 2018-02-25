import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DairyFreeIsaleanShakePage } from './dairy-free-isalean-shake';
import { ComponentsModule } from './../../../../components/components.module';

@NgModule({
  declarations: [
    DairyFreeIsaleanShakePage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(DairyFreeIsaleanShakePage),
  ],
})
export class DairyFreeIsaleanShakePageModule {}
