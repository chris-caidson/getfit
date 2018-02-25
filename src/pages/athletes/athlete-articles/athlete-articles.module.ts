import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AthleteArticlesPage } from './athlete-articles';
import { ComponentsModule } from './../../../components/components.module';

@NgModule({
  declarations: [
    AthleteArticlesPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(AthleteArticlesPage),
  ],
})
export class AthleteArticlesPageModule {}
