import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import { search } from './jmespath';
import {clone, get, isArray, isObject, isString, omit } from 'lodash-es';
import uuid from 'uuid';

// Type constants used to define functions.
const TYPE_NUMBER = 0;
const TYPE_ANY = 1;
const TYPE_STRING = 2;
const TYPE_ARRAY = 3;
const TYPE_OBJECT = 4;
const TYPE_BOOLEAN = 5;
const TYPE_EXPREF = 6;
const TYPE_NULL = 7;
const TYPE_ARRAY_NUMBER = 8;
const TYPE_ARRAY_STRING = 9;

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
    if (get(changes, 'model.firstChange', false)) {
      return;
    }
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
      return search({ data: this.model, context: this.context }, mapping, {
        functionTable: {
          uuid: {
            _func: uuid.v4,
            _signature: []
          },
          omit: {
            _func: ([o, a]) => omit(o, ...a),
            _signature: [{types: [TYPE_OBJECT]}, {types: [TYPE_ARRAY_STRING]}]
          },
        }
      });
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
