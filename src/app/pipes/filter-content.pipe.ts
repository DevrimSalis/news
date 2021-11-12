import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterContent'
})
export class FilterContentPipe implements PipeTransform {

  transform(value: any, filterText: string): any {
    filterText = filterText ? filterText.toLocaleLowerCase() : "";
    return filterText ? value
      .filter((c: any) => c.title.toLocaleLowerCase().indexOf(filterText) !== -1)
      : value;
  }
}
