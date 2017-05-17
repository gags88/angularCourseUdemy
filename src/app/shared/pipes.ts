import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string): string {
    console.log(value);
    const splitString = value.split('');
    const reverseArray = splitString.reverse();
    const joinArray = reverseArray.join('');
    console.log(joinArray);
    return joinArray;
  }
}

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(value: string[]/*, args?: any*/): string[] {
    const arr = value.sort((a: any, b: any) => a - b);
    console.log(arr);
    return arr;
  }
}
