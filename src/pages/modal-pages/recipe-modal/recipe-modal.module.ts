import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecipeModalPage } from './recipe-modal';

@NgModule({
  declarations: [
    RecipeModalPage,
  ],
  imports: [
    IonicPageModule.forChild(RecipeModalPage),
  ],
})
export class RecipeModalPageModule {}
