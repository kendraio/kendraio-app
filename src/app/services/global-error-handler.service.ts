import { Injectable, ErrorHandler } from '@angular/core';
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';
import {Subject} from 'rxjs';
import {debounceTime, throttleTime} from 'rxjs/operators';

export interface WorkflowDebugBlockState {
  index: number;
  blockType?: string;
  config: any;
  model: any;
}

export interface WorkflowDebugSnapshot {
  workflowId: string;
  lastActiveBlockIndex: number | null;
  lastTargetBlockIndex: number | null;
  blockStates: WorkflowDebugBlockState[];
  recentActiveBlocks: Array<{ index: number; tick: number }>;
  lastActivityTick: number;
}

type WorkflowDebugProvider = () => WorkflowDebugSnapshot;

const workflowDebugProviders = new Map<string, WorkflowDebugProvider>();

export function registerWorkflowDebugProvider(id: string, provider: WorkflowDebugProvider): void {
  workflowDebugProviders.set(id, provider);
}

export function unregisterWorkflowDebugProvider(id: string): void {
  workflowDebugProviders.delete(id);
}

export function getWorkflowDebugSnapshots(): WorkflowDebugSnapshot[] {
  return Array.from(workflowDebugProviders.entries()).map(([id, provider]) => {
    try {
      const snapshot = provider();
      if (snapshot && snapshot.workflowId) {
        return snapshot;
      }
    } catch (providerError: any) {
      console.warn('Failed to collect workflow debug snapshot', id, providerError);
    }
    return {
      workflowId: id,
      lastActiveBlockIndex: null,
      lastTargetBlockIndex: null,
      blockStates: [],
      recentActiveBlocks: [],
      lastActivityTick: 0
    };
  });
}

export function logWorkflowDebugSnapshots(label = 'Workflow debug state'): void {
  const snapshots = getWorkflowDebugSnapshots();
  if (snapshots.length === 0) {
    return;
  }
  console.info(label, snapshots);
  logRecentActivityEntries(snapshots);
}

function logRecentActivityEntries(snapshots: WorkflowDebugSnapshot[]): void {
  const entries = snapshots.flatMap(snapshot =>
    snapshot.recentActiveBlocks.map(block => ({ snapshot, block }))
  );

  if (entries.length === 0) {
    return;
  }

  entries.sort((a, b) => a.block.tick - b.block.tick);
  const firstEntries = entries.slice(0, Math.min(5, entries.length));
  const lastEntries = entries.length > 5 ? entries.slice(-5) : [];

  const logEntryBatch = (batchLabel: string, batch: typeof entries) => {
    batch.forEach((entry, idx) => {
      const { snapshot, block } = entry;
      const state = snapshot.blockStates.find(blockState => blockState.index === block.index);
      const blockLabel = state?.blockType || '(unknown)';
      const markers: string[] = [];
      if (block.index === snapshot.lastActiveBlockIndex) {
        markers.push('active');
      }
      if (block.index === snapshot.lastTargetBlockIndex) {
        markers.push('target');
      }
      const markerLabel = markers.length ? ` [${markers.join(', ')}]` : '';
      console.info(`[${batchLabel} #${idx + 1}] Workflow ${snapshot.workflowId} block ${block.index}${markerLabel} type=${blockLabel}`);
      console.dir({ config: state?.config, data: state?.model }, { depth: 1 });
    });
  };

  logEntryBatch('First', firstEntries);
  if (lastEntries.length > 0) {
    logEntryBatch('Last', lastEntries);
  }
}


function truncate(value: string, maxLength = 200): string {
  if (value.length <= maxLength) {
    return value;
  }
  return `${value.slice(0, maxLength)}…`;
}

@Injectable()
export class GlobalErrorHandlerService implements ErrorHandler {

  error$ = new Subject();

  constructor(
    private readonly notify: MatSnackBar
  ) {
    this.error$.pipe(
      throttleTime(4000)
    ).subscribe((error: any) => {
      this.notify.dismiss();
      if (error.message && error.message.length > 0) {
        this.notify.open(error.message, 'Dismiss', { horizontalPosition: 'center', verticalPosition: 'top', duration: 4000 });
      }
    });
  }

  handleError(error: any): void {
    console.error(error);
    logWorkflowDebugSnapshots('Workflow state at error');
    this.error$.next(error);
  }
}
