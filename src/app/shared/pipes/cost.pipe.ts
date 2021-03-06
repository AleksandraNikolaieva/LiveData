import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'cost'
})
export class CostPipe implements PipeTransform {
    transform(value: any): any {
        return `$${value}.00`;
    }
}
