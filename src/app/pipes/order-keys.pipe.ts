import { Pipe, PipeTransform } from '@angular/core';
import { orderBy } from 'lodash-es';

@Pipe({
  name: 'orderKeys'
})
export class OrderKeysPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return orderBy(value);
  }

}
