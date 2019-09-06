import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-blocks-workflow',
  templateUrl: './blocks-workflow.component.html',
  styleUrls: ['./blocks-workflow.component.scss']
})
export class BlocksWorkflowComponent implements OnInit {

  @Input() blocks = [];
  @Input() models = [];

  @Output() workflowComplete = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  updateModel(modelNumber, value) {
    console.log({ modelNumber, value });
    console.log(this.models);
    this.models = [...this.models.slice(0, modelNumber), value, ...this.models.slice(modelNumber + 1)];
    // Force change
    this.blocks = [...this.blocks];
    // Output as complete workflow if final block is causing the updating
    if (modelNumber >= this.blocks.length) {
      this.workflowComplete.emit(value);
    }
  }
}
