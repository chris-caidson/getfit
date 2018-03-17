import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SuccessStoriesPage } from './success-stories';
import { ComponentsModule } from './../../../components/components.module';
import { YearFilterPipe } from '../../../pipes/year-filter/year-filter';

@NgModule({
  declarations: [
    SuccessStoriesPage,
    YearFilterPipe
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(SuccessStoriesPage),
  ],
})
export class SuccessStoriesPageModule {}
