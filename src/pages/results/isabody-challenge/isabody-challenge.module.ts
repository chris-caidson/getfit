import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IsabodyChallengePage } from './isabody-challenge';
import { ComponentsModule } from './../../../components/components.module';

@NgModule({
  declarations: [
    IsabodyChallengePage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(IsabodyChallengePage),
  ],
})
export class IsabodyChallengePageModule {}
