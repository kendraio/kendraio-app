import {Component, EventEmitter, Input, NgZone, OnChanges, OnInit, Output} from '@angular/core';
import {clone, find, get} from 'lodash-es';
import {mappingUtility} from '../mapping-block/mapping-util';

@Component({
  selector: 'app-switch-block',
  templateUrl: './switch-block.component.html',
  styleUrls: ['./switch-block.component.scss']
})
export class SwitchBlockComponent implements OnInit, OnChanges {

  @Input() config;
  @Input() context;
  @Input() model: any = {};
  @Output() output = new EventEmitter();

  blocks = [];
  models = [];
  passDown = false; //Pass model down to child flows in a standard form. 

  constructor(
    private readonly zone: NgZone
  ) {
  }

  ngOnInit() {
    this.passDown = get(this.config, 'passDown', false);
  }

  ngOnChanges(changes) {
    const cases = get(this.config, 'cases', []);
    const matchValue = mappingUtility({data: this.model, context: this.context}, get(this.config, 'valueGetter', 'data'));
    const match = find(cases, ({value}) => value === matchValue);
    if (!!match) {
      this.blocks = get(match, 'blocks', []);
    } else {
      this.blocks = get(this.config, 'default.blocks', []);
    }
    this.models = this.blocks.map(blockDef => get(blockDef, 'defaultValue', {}));
    this.models.push({});
    setTimeout(() => {
      this.zone.run(() => {                
        // The structure of the data model passed to blocks within the flow
        if (this.passDown) {
          // The passdown model is actually the standard model structure expected by most blocks
          this.models = [clone(this.model)];
        } else {
          // the default model structure is compatible with datagrid row formatters (and possibly other looping control structures)
          this.models[0] = clone(this.model);
        }

      });
    }, 0);
  }

  finishAction(value) {
    this.output.emit(clone(this.model));
  }

}
