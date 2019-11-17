import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'numberToWord'
})
export class NumberToWordPipe implements PipeTransform {

    transform(value: any, ...args: any[]): any {
        if (value <= 10 && value > 0) {
            switch (value) {
                case 1:
                    value = "One";
                    break;
                case 2:
                    value = "Two";
                    break;
                case 3:
                    value = "Three";
                    break;
                case 4:
                    value = "Four";
                    break;
                case 5:
                    value = "Five";
                    break;
                case 6:
                    value = "Six";
                    break;
                case 7:
                    value = "Seven";
                    break;
                case 8:
                    value = "Eight";
                    break;
                case 9:
                    value = "Nine";
                    break;
                case 10:
                    value = "Ten";
                    break;
                default:
                    break;
            }
        }
        return value;
    }

}
