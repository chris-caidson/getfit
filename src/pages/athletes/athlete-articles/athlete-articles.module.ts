import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AthleteArticlesPage } from './athlete-articles';

@NgModule({
  declarations: [
    AthleteArticlesPage,
  ],
  imports: [
    IonicPageModule.forChild(AthleteArticlesPage),
  ],
})
export class AthleteArticlesPageModule {}
