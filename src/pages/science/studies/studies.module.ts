import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudiesPage } from './studies';

@NgModule({
  declarations: [
    StudiesPage,
  ],
  imports: [
    IonicPageModule.forChild(StudiesPage),
  ],
})
export class StudiesPageModule {}
