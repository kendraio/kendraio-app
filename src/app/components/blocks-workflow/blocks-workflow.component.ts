import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, Input, Output, EventEmitter, OnChanges } from '@angular/core';

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

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadBlocks();
    // let's log the blocks, models and context to see if they are being passed correctly
    console.log('blocks:',this.blocks);
    console.log('models:',this.models);
    console.log('context:',this.context);
  }
  
  ngOnChanges(changes) {
    if (changes.blocks || changes.models || changes.context) {
      this.loadBlocks();
    }
  }
  loadBlocks(this) {
    console.log('loadBlocks is running with blocks:',this.blocks);
    window['data'] = {"blocks": this.blocks, "models": this.models, "context":this.context};
    this.blocks.forEach((block, index) => {
      console.log('loadBlocks block:',block, 'index',index);
      const blockComponent = blockComponentMapping[block.type];
      if (blockComponent) {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(blockComponent);
        const componentRef = this.blockHost.createComponent(componentFactory);
        console.log('loadBlocks blockComponent:',blockComponent, componentRef);

        // Assign inputs to the component instance, adjust according to your block component's inputs
        if (block.config) {
          Object.assign(componentRef.instance, block.config);
        }

        // Use type assertion with the DynamicBlockComponent interface so that TypeScript knows the type of the component instance
        const instance = componentRef.instance as DynamicBlockComponent;

        console.log(`Loading block: ${block.type}`, { config: block.config });

        // Subscribe to the output EventEmitter if it exists
        instance.output?.subscribe(output => {
          console.log(`Output from block: ${block.type}`, output);
        });
      } else {
        console.log(`No component mapped for type: ${block.type}`);
      }
    });
  }
}
