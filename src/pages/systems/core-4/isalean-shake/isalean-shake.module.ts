import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IsaleanShakePage } from './isalean-shake';
import { ComponentsModule } from './../../../../components/components.module';

@NgModule({
  declarations: [
    IsaleanShakePage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(IsaleanShakePage),
  ],
})
export class IsaleanShakePageModule {}
