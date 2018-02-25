import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdaptogensPage } from './adaptogens';
import { ComponentsModule } from './../../../../components/components.module';

@NgModule({
  declarations: [
    AdaptogensPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(AdaptogensPage),
  ],
})
export class AdaptogensPageModule {}
