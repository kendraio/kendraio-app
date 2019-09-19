import {Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild} from '@angular/core';
import {get, has} from 'lodash-es';
import {KendraioFormService} from '../../_shared/ui-form/services/kendraio.form.service';
import * as faker from 'faker/locale/en_GB';

declare let JSONSchemaFaker: any;

@Component({
  selector: 'app-faker-block',
  templateUrl: './faker-block.component.html',
  styleUrls: ['./faker-block.component.scss']
})
export class FakerBlockComponent implements OnInit, OnChanges {

  @Input() config;
  @Input() context;
  @Input() model: any = {};
  @Output() output = new EventEmitter();

  constructor(
    private readonly formService: KendraioFormService
  ) { }

  ngOnInit() {
    JSONSchemaFaker.extend('faker', () => faker);
  }

  ngOnChanges(changes) {
    if (get(changes, 'model.firstChange', false)) {
      return;
    }
    this.outputFakeValues(get(this.config, 'jsonSchema', {}));
  }

  outputFakeValues(schema) {
    JSONSchemaFaker.resolve(schema).then(sample => this.output.emit(sample));
  }

}
