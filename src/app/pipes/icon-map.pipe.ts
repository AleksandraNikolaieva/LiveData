import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'iconMap'
})
export class IconMapPipe implements PipeTransform {

    transform(value: string, iconMap: any): any {
        return iconMap[value];
    }

}
