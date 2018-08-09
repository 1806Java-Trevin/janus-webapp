import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'convertInterval'
})
// pipe to properly display the tier of a trainer
export class ConvertIntervalPipe implements PipeTransform {

    transform(interval: number) {

        if (interval <= 0) {
            return 'No Schedule';
        }else if (interval < 60) {
            return interval + ' seconds';
        }else if (interval < 3600) {
            return Math.floor(interval / 60) + ' minute(s)';
        }else if (interval < 86400) {
            return Math.floor(interval / 3600) + ' hour(s)';
        }else if (interval < 604800) {
            return Math.floor(interval / 86400) + ' day(s)';
        }else {
            return Math.floor(interval / 604800) + ' week(s)';
        }
    }
}
