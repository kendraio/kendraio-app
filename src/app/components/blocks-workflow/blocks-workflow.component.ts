import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';
import {clone} from 'lodash-es';
import {
  registerWorkflowDebugProvider,
  unregisterWorkflowDebugProvider,
  WorkflowDebugSnapshot
} from 'src/app/services/global-error-handler.service';

@Component({
  selector: 'app-blocks-workflow',
  templateUrl: './blocks-workflow.component.html',
  styleUrls: ['./blocks-workflow.component.scss']
})
export class BlocksWorkflowComponent implements OnInit, OnChanges, OnDestroy {

  @Input() blocks = [];
  @Input() models = [];
  @Input() context = {};

  @Output() workflowComplete = new EventEmitter();

  private static instanceCounter = 0;
  private static activityCounter = 0;
  private readonly debugWorkflowId = `workflow-${++BlocksWorkflowComponent.instanceCounter}`;
  private blockStates = new Map<number, { config: any; model: any }>();
  private lastActiveBlockIndex: number | null = null;
  private lastTargetBlockIndex: number | null = null;
  private lastActivityTick = 0;
  private recentActiveBlocks: Array<{ index: number; tick: number }> = [];

  constructor() {
    registerWorkflowDebugProvider(this.debugWorkflowId, () => this.createDebugSnapshot());
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.blocks || changes.models) {
      this.rebuildDebugState();
    }
  }

  ngOnDestroy() {
    unregisterWorkflowDebugProvider(this.debugWorkflowId);
  }

  updateModel(modelNumber, value) {
    // console.log({ modelNumber, value });
    // console.log(this.models);
    this.models = [...this.models.slice(0, modelNumber), value, ...this.models.slice(modelNumber + 1)];
    const emittingIndex = modelNumber - 1;
    this.lastActiveBlockIndex = emittingIndex >= 0 ? emittingIndex : null;
    this.lastTargetBlockIndex = modelNumber;
    this.trackActiveBlock(this.lastActiveBlockIndex);
    this.updateBlockSnapshot(modelNumber);
    this.updateBlockSnapshot(this.lastActiveBlockIndex);
    // Force change
    this.blocks = [...this.blocks];
    // Output as complete workflow if final block is causing the updating
    if (modelNumber >= this.blocks.length) {
      this.workflowComplete.emit(value);
    }
  }

  runWorkflow() {
    if (this.models.length > 0) {
      this.models[0] = clone(this.models[0]);
      this.updateBlockSnapshot(0);
      this.lastActiveBlockIndex = 0;
      this.lastTargetBlockIndex = 0;
      this.trackActiveBlock(0);
    }
  }

  private rebuildDebugState() {
    const next = new Map<number, { config: any; model: any }>();
    this.blocks.forEach((block, index) => {
      next.set(index, { config: block, model: this.models[index] });
    });
    for (let modelIndex = this.blocks.length; modelIndex < this.models.length; modelIndex++) {
      next.set(modelIndex, { config: null, model: this.models[modelIndex] });
    }
    this.blockStates = next;
  }

  private updateBlockSnapshot(index: number | null) {
    if (index === null || index < 0) {
      return;
    }
    const config = index < this.blocks.length ? this.blocks[index] : null;
    const model = this.models[index];
    this.blockStates.set(index, { config, model });
  }

  private trackActiveBlock(index: number | null) {
    if (index === null || index < 0) {
      return;
    }
    const tick = ++BlocksWorkflowComponent.activityCounter;
    this.lastActivityTick = tick;
    this.recentActiveBlocks = [...this.recentActiveBlocks, { index, tick }].slice(-5);
  }

  private createDebugSnapshot(): WorkflowDebugSnapshot {
    return {
      workflowId: this.debugWorkflowId,
      lastActiveBlockIndex: this.lastActiveBlockIndex,
      lastTargetBlockIndex: this.lastTargetBlockIndex,
      blockStates: Array.from(this.blockStates.entries()).map(([index, state]) => ({
        index,
        blockType: state.config && state.config.type,
        config: state.config,
        model: state.model
      })),
      recentActiveBlocks: [...this.recentActiveBlocks],
      lastActivityTick: this.lastActivityTick
    };
  }
}
