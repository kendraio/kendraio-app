import { TagInterface } from './tag.interface';
import { TagBaseInterface } from './tag-base.interface';

export interface TaggerInterface {
  addTag(tag: TagInterface): void;
  updateTag({ i, tag }): void;
  tagBase: TagBaseInterface;
  defaultTagSize: number;
}
