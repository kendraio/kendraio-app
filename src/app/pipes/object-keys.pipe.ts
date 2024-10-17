import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objectKeys',
})
export class ObjectKeysPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    // console.log(Object.keys(value));
    return value ? Object.keys(value) : [];
  }
}
