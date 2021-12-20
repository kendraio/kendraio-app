import {Component, EventEmitter, Input, NgZone, OnChanges, OnInit, Output, ViewChild} from '@angular/core';
import {clone, get} from 'lodash-es';
import {BlocksWorkflowComponent} from '../../components/blocks-workflow/blocks-workflow.component';
import {mappingUtility} from '../mapping-block/mapping-util';
import { SharedStateService } from 'src/app/services/shared-state.service';

@Component({
  selector: 'app-actions-block',
  templateUrl: './actions-block.component.html',
  styleUrls: ['./actions-block.component.scss']
})
export class ActionsBlockComponent implements OnInit, OnChanges {

  @Input() config;
  @Input() context;
  @Input() model: any = {};

  @Output() output = new EventEmitter();

  buttons = [];
  blocks = [];
  models = [];

  @ViewChild(BlocksWorkflowComponent) workflow;

  constructor(
    private readonly zone: NgZone,
    private stateService: SharedStateService
  ) {
    stateService.shared$.subscribe(incoming => { setTimeout(() =>{this.setEnabled()}) });
   }

  getLabel(button) {
    return button.labelGetter
      ? mappingUtility({ data: this.model, context: this.context, state: this.stateService.state }, button.labelGetter)
      : (button.label || 'Submit');
  }

  setEnabled(){
    setTimeout(() =>{
      this.buttons.forEach( (button,index) => {
        let enabled = button.enabledGetter ? mappingUtility({ data: this.model, context: this.context,state: this.stateService.state  }, button.enabledGetter) : true;        
        this.buttons[index].enabled = enabled;
      })
    })
  }
  
  ngOnInit() {
  }

  ngOnChanges(changes) {
    this.buttons = get(this.config, 'buttons', []);
    this.setEnabled();
  }

  onSubmit(button) {
    // console.log({ button });
    // TODO: refactor (d)
    this.blocks = get(button, 'blocks', []);
    this.models = this.blocks.map(blockDef => get(blockDef, 'defaultValue', {}));
    this.models.push({});
    setTimeout(() => {
      this.zone.run(() => {
        this.models = [clone(this.model)];
      });
    }, 0);
  }

  finishAction(value) {
    // console.log('finished action', { value });
    setTimeout(() => {
      this.blocks = [];
      this.zone.run(() => {
        this.output.emit(clone(value));
      });
    }, 0);
  }

}
