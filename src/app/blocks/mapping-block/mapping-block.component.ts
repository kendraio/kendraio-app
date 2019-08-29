import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {search} from 'jmespath';
import {get, isArray, isObject, isString} from 'lodash-es';

@Component({
  selector: 'app-mapping-block',
  templateUrl: './mapping-block.component.html',
  styleUrls: ['./mapping-block.component.scss']
})
export class MappingBlockComponent implements OnInit, OnChanges {

  @Input() config;
  @Input() model: any = {};
  @Output() output = new EventEmitter();

  mapping = '';

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes): void {
    this.mapping = get(this.config, 'mapping', '');
    const mappingResult = this.getMappingResult(this.mapping);
    this.output.emit(isArray(mappingResult) ? [ ...mappingResult ] : isObject(mappingResult) ? { ...mappingResult } : mappingResult);
  }

  getMappingResult(mapping) {
    if (isString(mapping)) {
      return search(this.model, mapping);
    }
    if (isArray(mapping)) {
      return mapping.map(v => this.getMappingResult(v));
    }
    if (isObject(mapping)) {
      return Object.keys(mapping).reduce((a, key) => {
        a[key] = this.getMappingResult(mapping[key]);
        return a;
      }, {});
    }
    return mapping;
  }
}
