import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'commaNumber'
})
export class CommaNumberPipe implements PipeTransform {

    transform(value: number): any {
        return value.toLocaleString().replace(/\s/g, ',');
    }
}
