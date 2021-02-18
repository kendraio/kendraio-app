import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (!value) {
      return value;
    }
    const minutes = Math.floor(value / 60);
    const seconds = `${Math.floor(value - minutes)}`.padStart(2, '0');
    return `${minutes}:${seconds}`;
  }

}
