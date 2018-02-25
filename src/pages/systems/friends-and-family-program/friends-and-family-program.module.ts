import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FriendsAndFamilyProgramPage } from './friends-and-family-program';
import { ComponentsModule } from './../../../components/components.module';

@NgModule({
  declarations: [
    FriendsAndFamilyProgramPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(FriendsAndFamilyProgramPage),
  ],
})
export class FriendsAndFamilyProgramPageModule {}
