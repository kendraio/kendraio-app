import {Component, EventEmitter, Input, NgZone, OnChanges, OnInit, Output, ViewChild} from '@angular/core';
import {clone, get} from 'lodash-es';
import {BlocksWorkflowComponent} from '../../components/blocks-workflow/blocks-workflow.component';

@Component({
  selector: 'app-actions-block',
  templateUrl: './actions-block.component.html',
  styleUrls: ['./actions-block.component.scss']
})
export class ActionsBlockComponent implements OnInit, OnChanges {

  @Input() config;
  @Input() model: any = {};

  @Output() output = new EventEmitter();

  buttons = [];
  blocks = [];
  models = [];

  @ViewChild(BlocksWorkflowComponent, { static: false }) workflow;

  constructor(
    private readonly zone: NgZone
  ) { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    this.buttons = get(this.config, 'buttons', []);
  }

  onSubmit(button) {
    // console.log({ button });
    // TODO: refactor (d)
    this.blocks = get(button, 'blocks', []);
    this.models = this.blocks.map(blockDef => get(blockDef, 'defaultValue', {}));
    this.models.push({});
    // console.log(this.workflow);
    setTimeout(() => {
      this.zone.run(() => {
        // this.workflow.runWorkflow();
        this.models[0] = clone(this.model);
      });
    }, 0);
  }

  finishAction(value) {
    this.blocks = [];
    console.log('finished action', { value });
  }

}
