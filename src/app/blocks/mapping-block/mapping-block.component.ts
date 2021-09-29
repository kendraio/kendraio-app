import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {clone, find, get, isArray, isObject, isString, isUndefined, omit, pick, pickBy} from 'lodash-es';
import {mappingUtility} from './mapping-util';

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
  debugMapping = false;
  skipFirst = false;
  runOnce = false;
  hasRun = false;

  hasError = false;
  errorMessage = '';

  constructor() { }

  ngOnInit() {
  }

  onData(data: any, firstChange: boolean) {
    let myData=data;
  }

  ngOnChanges(changes): void {
    const keyChanges = Object.keys(changes);
    if (keyChanges.length === 1 && keyChanges.includes('context')) {
      // ignore changes where only the context changed
      return;
    }
    // console.log('mapping changes', this.mapping,  changes);
    this.mapping = this.parseMapping(get(this.config, 'mapping'));
    this.debugMapping = get(this.config, 'debug', false);
    this.skipFirst = get(this.config, 'skipFirst', false);
    this.runOnce = get(this.config, 'runOnce', false);
    if (this.skipFirst && get(changes, 'model.firstChange', false)) {
      return;
    }
    if (this.runOnce && this.hasRun) {
      return;
    }
    if (this.model === null || isUndefined(this.model)) {
      return;
    }
    this.hasError = false;
    try {
      
      // console.log(this.mapping, { mappingResult });
      setTimeout(function(){
        const mappingResult = this.getMappingResult(this.mapping);
        this.output.emit(clone(mappingResult));
        this.hasRun = true;
      }.bind(this), 0);
    } catch (e) {
      this.hasError = true;
      this.errorMessage = e.message;
    }
  }

  parseMapping(mapping) {
    if (isString(mapping)) {
      return mapping;
    }
    if (isArray(mapping)) {
      return mapping.map(m => this.parseMapping(m)).join('');
    }
    if (isObject(mapping)) {
      const keys = Object.keys(mapping);
      if (keys.length === 1) {
        if (keys[0] === '.' || keys[0] === '|') {
          return `${keys[0]}${this.parseMapping(mapping[keys[0]])}`;
        }
        if (keys[0] === '[') {
          return '[' + mapping[keys[0]].map(m => this.parseMapping(m)).join(', ') + ']';
        }
        if (keys[0] === '(') {
          const [funcName, ...args] = mapping[keys[0]];
          return `${funcName}(${args.map(a => this.parseMapping(a)).join(', ')})`;
        }
        if (keys[0] === '{') {
          const obj = mapping[keys[0]];
          const keys2 = Object.keys(obj);
          return `{ ` + keys2.map(k => `${k}: ${this.parseMapping(obj[k])}`).join(', ') + ` }`;
        }
        return keys.map(k => `${k}${this.parseMapping(mapping[k])}`).join(', ');
      }
      return `{ ` + keys.map(k => `${k}: ${this.parseMapping(mapping[k])}`).join(', ') + ` }`;
    }
    return '';
  }

  getMappingResult(mapping) {
    if (isString(mapping)) {
      return mappingUtility({ data: this.model, context: this.context }, mapping);
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
