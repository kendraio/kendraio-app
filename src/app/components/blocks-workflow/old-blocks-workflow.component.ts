import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {clone} from 'lodash-es';

function json_pretty(obj) {
    return JSON.stringify(obj, null, 2);
}
@Component({
  selector: 'app-blocks-workflow',
  templateUrl: './blocks-workflow.component.html',
  styleUrls: ['./blocks-workflow.component.scss']
})
export class BlocksWorkflowComponent implements OnInit {

  @Input() blocks = [];
  @Input() models = [];
  @Input() context = {};

  @Output() workflowComplete = new EventEmitter();

  constructor() { }

  ngOnInit() {
    // Logging the blocks array for debugging purposes
    console.log('BlocksWorkflowComponent init blocks:', json_pretty(this.blocks));
  }

  /**
   * 🚨 AI generated documentation, TO BE VERIFIED:
   * 
   * Purpose: Update the model state within the BlocksWorkflowComponent, 
   * essential for maintaining the application's current state as it processes various blocks.
   * 
   * Parameters:
   * - modelNumber (type: number): Index of the model to be updated (zero-based).
   * - value (type: any): New value for the model at the specified index (modelNumber).
   * 
   * Functionality:
   * 1. Update Models Array: Creates a new array with updated model values using spread operator.
   *    - this.models.slice(0, modelNumber) creates a shallow copy up to the index modelNumber.
   *    - Adds 'value' at position modelNumber.
   *    - Adds the rest of the array elements after modelNumber.
   * 2. Force Change Detection: Reassigns this.blocks to force Angular change detection.
   * 3. Emit Workflow Completion: Emits workflowComplete event if updating process reaches final block.
   */
  updateModel(modelNumber, value) {
    const blockName = this.blocks[modelNumber].type;
    // Logging the block value for debugging purposes
    console.log('BlocksWorkflowComponent updating block with value:', blockName, json_pretty(value));
    //console.log('BlocksWorkflowComponent models:', this.models);

    // Update the specified model in the models array:
    // 1. Keep all models up to the specified index (modelNumber) unchanged.
    // 2. Replace the model at the specified index (modelNumber) with the new value.
    // 3. Retain all models after the specified index (modelNumber).
    this.models = [
      ...this.models.slice(0, modelNumber), // Copy elements before modelNumber
      value,                                // Insert the new value
      ...this.models.slice(modelNumber + 1) // Copy elements after modelNumber
    ];

    // Force a change detection cycle in Angular by creating a new reference for the blocks array.
    // This is necessary as Angular may not detect changes to the contents of an array.
    this.blocks = [...this.blocks];

    // Check if the current model update is for the final block in the workflow.
    // If it is the final block, emit an event to signify the completion of the workflow.
    if (modelNumber >= (this.blocks.length - 1)) { // This actually contained an off-by-one bug so never fired
      console.log('Emitting workflowComplete with value:', value);
      this.workflowComplete.emit(value); // Emit workflow completion event
    } else {
      console.log('Not emitting workflowComplete yet for block:', blockName, 'because modelNumber:', modelNumber, 'is less than blocks.length:', this.blocks.length);
    }
  }


  // This function seems to be no longer used!
  // src/app/blocks/actions-block/actions-block.component.ts does a similar thing though
  // TODO: Verify that runWorkflow is no longer used and remove it

  runWorkflow() {
    if (this.models.length > 0) {
      this.models[0] = clone(this.models[0]);
    }
  }
}
