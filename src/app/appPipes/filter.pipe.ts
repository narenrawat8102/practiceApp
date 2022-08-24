import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false,
})
export class FilterPipe implements PipeTransform {
  transform(value: any, searchTerm: any): any {
    return value.filter(function (searchItem: any) {
      return (
        searchItem.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
      );
    });
  }
}
