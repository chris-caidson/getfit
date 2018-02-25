import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudiesPage } from './studies';
import { ComponentsModule } from './../../../components/components.module';

@NgModule({
  declarations: [
    StudiesPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(StudiesPage),
  ],
})
export class StudiesPageModule {}
