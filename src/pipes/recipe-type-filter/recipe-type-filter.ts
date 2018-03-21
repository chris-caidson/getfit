import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'recipeTypeFilter',
})
export class RecipeTypeFilterPipe implements PipeTransform {

  transform(items: any[], filter: string) {
    if (!items || !filter) {
      return items;
    }

    return items.filter(item => item.category == filter);
  }
}
