import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'convertTime'
})
// pipe to properly display the tier of a trainer
export class ConvertTimePipe implements PipeTransform {

    transform(delay: number) {

        if (delay <= 0) {
            return 'There is currently no schedule for this email';
        }
        delay = delay + 2;
        const date = new Date();
        // console.log('Milliseconds since epoch' + date.getSeconds() );
        // console.log('Milliseconds since epoch' + date.getTime());
        // console.log('Milliseconds since epoch' + date.getUTCMilliseconds() );

        // console.log('read in delay' + delay);
        // console.log('time in second since epoch of new' + date.getTime() / 1000 + delay);
        // console.log('other date new now ' + new Date((date.getTime() / 1000 + delay) * 1000));
        let dateStr = new Date((date.getTime() / 1000 + delay) * 1000).toLocaleString();
        dateStr = dateStr.substring(0, dateStr.length - 6 );
        return dateStr;
        // return new Date(date.getMilliseconds() / 1000 + delay );
    }
}
