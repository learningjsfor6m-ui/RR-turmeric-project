import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: true
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText: string, propertyName?: string): any[]  {
   // debugger
     if (!items || !searchText) {
          return items;
        }
        searchText = searchText.toLowerCase();

        return items.filter(item => {
          if (propertyName) {
            return item[propertyName].toLowerCase().includes(searchText);
          } else {
            // Filter across all string properties if no specific property is given
            return Object.keys(item).some(key =>
              typeof item[key] === 'string' && item[key].toLowerCase().includes(searchText)
            );
          }
        });

  }

}
