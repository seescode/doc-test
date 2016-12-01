import { Pipe, PipeTransform } from '@angular/core';

/**
 * Formats seconds to hours
 */
@Pipe({ name: 'hourFormatter' })
export class HourFormatterPipe implements PipeTransform {

    /**
     * transform it 
     * @param seconds - the seconds it takes
     */
    transform(seconds: number): string {
        let hours = Math.floor(seconds / 3600);
        return hours.toString();
    }
}