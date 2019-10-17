import { Pipe, PipeTransform } from '@angular/core';
import {mappingUtility} from '../blocks/mapping-block/mapping-util';

@Pipe({
  name: 'mapping'
})
export class MappingPipe implements PipeTransform {

  transform(value: any, expr): any {
    return mappingUtility(value, expr);
  }

}
