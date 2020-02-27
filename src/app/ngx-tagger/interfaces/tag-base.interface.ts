import { ElementRef } from '@angular/core';
import { TagInterface } from './tag.interface';

export interface TagBaseInterface {
  el: ElementRef;
  getTagPosition(x: number, y: number, width: number, height: number): TagInterface;
}
