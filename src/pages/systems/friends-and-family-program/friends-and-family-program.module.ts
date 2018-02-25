import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FriendsAndFamilyProgramPage } from './friends-and-family-program';

@NgModule({
  declarations: [
    FriendsAndFamilyProgramPage,
  ],
  imports: [
    IonicPageModule.forChild(FriendsAndFamilyProgramPage),
  ],
})
export class FriendsAndFamilyProgramPageModule {}
