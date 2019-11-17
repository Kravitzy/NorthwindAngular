import { Pipe, PipeTransform } from '@angular/core';

// used in interpolation {{ some-value | zeroSymbol}}

@Pipe({
  name: 'zeroSymbol'
})
export class ZeroSymbolPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {

    if (value === 0) {
        value = args[0] ? args[0] : "---";
    }
    return value;
  }

}
