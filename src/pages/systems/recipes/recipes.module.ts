import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecipesPage } from './recipes';
import { ComponentsModule } from './../../../components/components.module';
import { RecipeTypeFilterPipe } from '../../../pipes/recipe-type-filter/recipe-type-filter';

@NgModule({
  declarations: [
    RecipesPage,
    RecipeTypeFilterPipe
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(RecipesPage),
  ],
})
export class RecipesPageModule {}
