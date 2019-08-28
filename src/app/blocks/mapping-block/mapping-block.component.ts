import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {search} from 'jmespath';
import {get, isArray, isObject} from 'lodash-es';

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
    const mappingResult = search(this.model, this.mapping);
    this.output.emit(isArray(mappingResult) ? [ ...mappingResult ] : isObject(mappingResult) ? { ...mappingResult } : mappingResult);
  }

}
