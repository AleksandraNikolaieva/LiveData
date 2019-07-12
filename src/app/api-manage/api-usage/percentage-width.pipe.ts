import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'percentageWidth'
})
export class PercentageWidthPipe implements PipeTransform {
    transform(value: number): any {
        return 50 / value;
    }
}
