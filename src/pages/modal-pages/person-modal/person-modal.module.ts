import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonModalPage } from './person-modal';

@NgModule({
  declarations: [
    PersonModalPage,
  ],
  imports: [
    IonicPageModule.forChild(PersonModalPage),
  ],
})
export class PersonModalPageModule {}
