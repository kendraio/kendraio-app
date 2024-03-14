import { Component, OnInit, ViewChild, ViewContainerRef, ChangeDetectorRef, ComponentFactoryResolver, SimpleChange, Input, Output, EventEmitter, OnChanges, Injector, NgZone } from '@angular/core';

import { FormBlockComponent } from 'src/app/blocks/form-block/form-block.component';
import { DebugBlockComponent } from 'src/app/blocks/debug-block/debug-block.component';
import { QueryBlockComponent } from 'src/app/blocks/query-block/query-block.component';
// Add other imports for other block components here

// Simple interface to describe the expected structure of dynamically loaded block components
interface DynamicBlockComponent {
  output?: EventEmitter<any>;
  // TODO: Add other common properties and methods here
}

// Mapping from block types to component classes
const blockComponentMapping = {
  'form': FormBlockComponent,
  'debug': DebugBlockComponent,
  'query': QueryBlockComponent,
  // TODO: Add other block types here
};

@Component({
  selector: 'app-blocks-workflow',
  templateUrl: './blocks-workflow.component.html',
  styleUrls: ['./blocks-workflow.component.scss'],
})
export class BlocksWorkflowComponent implements OnInit, OnChanges {
  @ViewChild('blockHost', { read: ViewContainerRef }) blockHost: ViewContainerRef;

  @Input() blocks = [];
  @Input() models = [];
  @Input() context = {};

  @Output() workflowComplete = new EventEmitter();
  // TODO: Use output events to emit data so that if this component is used in a parent component, the parent component can listen to the output events and get the data from the blocks

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private readonly cd: ChangeDetectorRef,
    private readonly zone: NgZone
    ) { }

  ngOnInit() {
    this.loadBlocks();
    // let's log the blocks, models and context to see if they are being passed correctly
    console.log('blocks:',this.blocks);
    console.log('models:',this.models);
    console.log('context:',this.context);
  }
  
  ngOnChanges(changes) {
    if (changes.blocks || changes.models || changes.context) {
      console.log('ngOnChanges ran with changes:', changes);
      this.loadBlocks();
    }
  }
loadBlocks() {
  window['componentRefs'] = [];
    console.log('loadBlocks is running with blocks:', this.blocks);
    window['data'] = {"blocks": this.blocks, "models": this.models, "context": this.context};
    this.blocks.forEach((block, index) => {
      console.log('loadBlocks block:', block.type, 'index', index);
      const blockComponent = blockComponentMapping[block.type];
      if (blockComponent) {

        const componentRef = this.blockHost.createComponent(blockComponent);
        console.log('loadBlocks blockComponent:', blockComponent, componentRef);
        
        window['componentRefs'][index] = componentRef; // For debugging investigation in the browser console
        if (componentRef.instance) {
          componentRef.instance['config'] = block;
          componentRef.instance['context'] = {}; // TODO: Pass the context to the block component
          console.log('loadBlocks config and context set, running ngOnChanges');
          componentRef.instance['ngOnChanges']({config: block});
        }
        
      } else {
        console.log(`No component mapped for type: ${block.type}`);
      }
    });
  }
}
