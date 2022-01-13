import {Component, EventEmitter, Input, NgZone, OnChanges, OnInit, Output} from '@angular/core';
import {clone, find, get} from 'lodash-es';
import {mappingUtility} from '../mapping-block/mapping-util';
import { SharedStateService } from 'src/app/services/shared-state.service';


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
  
  constructor(
    private readonly zone: NgZone,
    private stateService:SharedStateService
  ) {
  }

  ngOnInit() {    
  }

  ngOnChanges(changes) {
    const cases = get(this.config, 'cases', []);
    const matchValue = mappingUtility({data: this.model, context: this.context, state: this.stateService.state}, get(this.config, 'valueGetter', 'data'));
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
          this.models = [clone(this.model)];
      });
    }, 0);
  }

  finishAction(value) {
    this.output.emit(clone(this.model));
  }

}
