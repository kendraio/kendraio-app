import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {search} from 'jmespath';
import {clone, get, isArray, isObject, isString} from 'lodash-es';

@Component({
  selector: 'app-mapping-block',
  templateUrl: './mapping-block.component.html',
  styleUrls: ['./mapping-block.component.scss']
})
export class MappingBlockComponent implements OnInit, OnChanges {

  @Input() config;
  @Input() context;
  @Input() model: any = {};
  @Output() output = new EventEmitter();

  mapping = '';

  hasError = false;
  errorMessage = '';

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes): void {
    this.hasError = false;
    this.mapping = get(this.config, 'mapping', '');
    try {
      const mappingResult = this.getMappingResult(this.mapping);
      this.output.emit(clone(mappingResult));
    } catch (e) {
      this.hasError = true;
      this.errorMessage = e.message;
    }
  }

  getMappingResult(mapping) {
    if (isString(mapping)) {
      return search({ data: this.model, context: this.context }, mapping);
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
