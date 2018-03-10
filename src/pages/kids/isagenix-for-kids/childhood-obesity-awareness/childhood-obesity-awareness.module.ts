import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChildhoodObesityAwarenessPage } from './childhood-obesity-awareness';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  declarations: [
    ChildhoodObesityAwarenessPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ChildhoodObesityAwarenessPage),
  ],
})
export class ChildhoodObesityAwarenessPageModule {}
