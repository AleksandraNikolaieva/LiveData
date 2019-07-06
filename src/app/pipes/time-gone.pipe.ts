import { Pipe, PipeTransform } from '@angular/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Pipe({
    name: 'timeGone'
})
export class TimeGonePipe implements PipeTransform {

    transform(isoDate: string): any {
        const todayMs: number = Date.now();

        const hoursGone = Math.round((todayMs - Date.parse(isoDate)) / 1000 / 60 / 60);
        const daysGone = Math.round(hoursGone / 24);
        const weeksGone = Math.round(daysGone / 7);

        if (hoursGone < 24) {
            return hoursGone === 1 ? `${hoursGone} hour ago` : `${hoursGone} hours ago`;
        } else if (daysGone < 7) {
            return daysGone === 1 ? `${daysGone} day ago` : `${daysGone} days ago`;
        } else if (weeksGone < 4) {
            return weeksGone === 1 ? `${weeksGone} week ago` : `${weeksGone} weeks ago`;
        } else {
            const year = isoDate.slice(0, 4);
            const month = isoDate.slice(5, 7);
            const date = isoDate.slice(8, 10);

            return `${date}/${month}/${year}`;
        }
    }
}
