import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uxpipe',
})
export class UxPipe implements PipeTransform {
  transform(value: any) {
    // console.log(value);
    // return value + ' for custom pipes.';
    // return value.substr(0, 10) + '...';

    if (value.length > 8) {
      return value.substr(0, 10) + '...';
    } else {
      return value;
    }
  }
}
