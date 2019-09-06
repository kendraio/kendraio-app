import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-blocks-workflow',
  templateUrl: './blocks-workflow.component.html',
  styleUrls: ['./blocks-workflow.component.scss']
})
export class BlocksWorkflowComponent implements OnInit {

  @Input() blocks = [];
  @Input() models = [];

  constructor() { }

  ngOnInit() {
  }

  updateModel(modelNumber, value) {
    // console.log({ modelNumber, value });
    this.models = [...this.models.slice(0, modelNumber), value, ...this.models.slice(modelNumber + 1)];
    // Force change
    this.blocks = [...this.blocks];
  }
}
