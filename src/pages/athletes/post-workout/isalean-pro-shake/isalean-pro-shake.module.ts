import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IsaleanProShakePage } from './isalean-pro-shake';
import { ComponentsModule } from './../../../../components/components.module';

@NgModule({
  declarations: [
    IsaleanProShakePage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(IsaleanProShakePage),
  ],
})
export class IsaleanProShakePageModule {}
