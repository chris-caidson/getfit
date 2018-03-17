import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yearFilter',
})
export class YearFilterPipe implements PipeTransform {

  transform(items: any[], filter: number) {
    if (!items || !filter) {
      return items;
    }

    return items.filter(item => item.year == filter);
  }
}
