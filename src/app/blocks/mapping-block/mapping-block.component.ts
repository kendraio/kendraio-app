import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {clone, find, get, isArray, isObject, isString, isUndefined, omit, pick, pickBy} from 'lodash-es';
import {mappingUtility} from './mapping-util';
import { SharedStateService } from 'src/app/services/shared-state.service';

@Component({
  selector: 'app-mapping-block',
  templateUrl: './mapping-block.component.html',
  styleUrls: ['./mapping-block.component.scss']
})
export class MappingBlockComponent implements OnInit, OnChanges {

  @Input() config;
  @Input() context;
  @Input() model: any = {};
  @Output() output = new EventEmitter();

  mapping = '';
  debugMapping = false;
  skipFirst = false;
  runOnce = false;
  hasRun = false;
  hasError = false;
  errorMessage = '';

  ignoreState = false; // Config can be set to ignore state changes
  lastState = null; // Records prior state
  slowMode = false; // Reactions are throttled if there are multiple state changes in a short time
  stateChangeInitTimestamps = []; // Records how often state changes occur to enable throttling
  scheduledRuns = 0; // How many delayed runs are scheduled.

  constructor(
    private stateService: SharedStateService
  ) {
    stateService.state$.subscribe({next: (result:any) => this.handleStateChange(), error: () =>{}})
  }
  handleStateChange(): void {
    if (this.ignoreState) {
      return;
    }
    const stateDiffers = this.lastState !== JSON.stringify(this.stateService.state);
    const mappingUsesState = this.mapping.includes('state.');
    if (mappingUsesState === false) {
      return;
    }
    // Extract the state keys used in the mapping, they are in the format of state.[global/local].[key]
    const stateKeys = this.mapping.match(/state\.(global|local)\.[a-zA-Z0-9_]+/g);
    // Does the state differ for the any state keys that are used in the mapping?
    const lastStateJSON = JSON.parse(this.lastState);
    let differingKeys = [];

    // We detect if any of the state key values are different in the mapping we are using
    const watchedStateDiffers = stateKeys && stateKeys.length > 0 && stateKeys.some(key => {
      // we strip "state." from the key to get the actual key name:
      const stateKey = key.replace('state.', '');
      const latestStateValue = get(this.stateService.state, stateKey);
      const lastStateValue = get(lastStateJSON, stateKey);
      const changed = latestStateValue !== lastStateValue;
      //console.log(key, lastStateJSON, changed);
      if (changed) {
        differingKeys.push(key);
      }
      return changed;
    });

    if (watchedStateDiffers) {
      // Set some defaults that are used for delaying the execution of the mapping blocks 
      window['stateDeferTime'] = window['stateDeferTime'] || 10;
      window['queuedStateReaction'] = window['queuedStateReaction'] || [];
      window['stateLoopRisks'] = window['stateLoopRisks'] || [];

      // Makes a global queue worker if not found.
      // Instead of setIntervals we use setTimeouts to allow variable delays
      if (window['queuedStateReactionWorker'] === undefined) {
        window['queuedStateReactionWorkerFunction'] = () => {
          // We just run the first item in the queue, rather than all of them.
          // This avoids running reactions to lots of state changes in a short time, which can cause performance issues.
          // However this also will slow some things down, so we need to find a balance while we have this band-aide in place.
          // TODO: Ensure one item in the queue from each mapping block, so we can run all throttled mapping responses at the same time for good response times and minimal performance impact.
          if (window['queuedStateReaction'].length > 0) {
            const next = window['queuedStateReaction'].shift();
            next();
          }
          window['queuedStateReactionWorker'] = setTimeout(window['queuedStateReactionWorkerFunction'], window['stateDeferTime']);
        };
        window['queuedStateReactionWorker'] = setTimeout(window["queuedStateReactionWorkerFunction"], window['stateDeferTime']);
      }

      // Tracks our rate of changes over time.
      // If there are more than 2 state changes in 1 second we will slow down.
      const now = new Date().getTime();
      this.stateChangeInitTimestamps.push(now);
      const lastSecond = now - 1000;
      const stateChangesInLastSecond = this.stateChangeInitTimestamps.filter(t => t > lastSecond);
      const tooFast = stateChangesInLastSecond.length > 2;
      // If we have been too fast, we slow down.
      if (tooFast || this.slowMode) {
        // We probably are in a loop, so we delay reactions to state changes
        this.slowMode = true;

        // We multiply stateDeferTime each time we get a state change
        window['stateDeferTime'] = Math.min(Math.floor(window['stateDeferTime'] * 1.28), 4000);

        if (tooFast) {
          // to track possible loops, add our mapping string to the stateLoopRisks array
          window['stateLoopRisks'].push({ mapping: this.mapping, timestamp: now });
        }

        // we look for fellow loop risks, identify the chain structure and log it:
        const loopRisks = window['stateLoopRisks'];

        if (loopRisks.length > 1) {
          const loopRiskChains = loopRisks.map(r => r.mapping);
          //console.log('loop risk chain', loopRiskChains, 'stateDeferTime', window['stateDeferTime'], 'queuedStateReaction count', window['queuedStateReaction'].length, 'scheduledRuns', this.scheduledRuns);
        }

        // Queues up a reaction to the state event if we do not have a reaction scheduled yet:
        if (this.scheduledRuns < 1) {
          window['queuedStateReaction'].push(() => {
            // Now we trigger the state change
            console.log("Running throttled state change for mapping", this.mapping);
            this.ngOnChanges({});
            // Decrement the scheduled runs, but never go below 0
            this.scheduledRuns = Math.max(this.scheduledRuns - 1, 0);
          });
        } else {
          // We already have reactions scheduled. We don't need to queue up another one.
          console.log(this.scheduledRuns, 'state changes have occured for', this.mapping, 'but we are waiting to process them.')
        }
        return;

      }
      // If we did not bail out already, we trigger the mapping block evaluation immediately:
      this.ngOnChanges({});

    }
  }

  ngOnInit() {
  }

  onData(data: any, firstChange: boolean) {
    let myData=data;
  }

  ngOnChanges(changes): void {
    this.lastState = JSON.stringify(this.stateService.state);
    const keyChanges = Object.keys(changes);
    if (keyChanges.length === 1 && keyChanges.includes('context')) {
      // ignore changes where only the context changed
      return;
    }
    // console.log('mapping changes', this.mapping,  changes);
    this.mapping = this.parseMapping(get(this.config, 'mapping'));
    this.debugMapping = get(this.config, 'debug', false);
    this.skipFirst = get(this.config, 'skipFirst', false);
    this.runOnce = get(this.config, 'runOnce', false);
    this.ignoreState = get(this.config, 'ignoreState', false);
    if (this.skipFirst && get(changes, 'model.firstChange', false)) {
      return;
    }
    if (this.runOnce && this.hasRun) {
      return;
    }
    if (this.model === null || isUndefined(this.model)) {
      return;
    }
    this.hasError = false;
    setTimeout(function(){
      try {
        const mappingResult = this.getMappingResult(this.mapping);
        this.output.emit(clone(mappingResult));
      } catch (e) {
        this.hasError = true;
        this.errorMessage = `${e.message}  \nMapping: ${this.mapping}`;    
      } finally {
        this.hasRun = true; 
      }      
    }.bind(this), 0);
  }
  parseMapping(mapping) {
    if (isString(mapping)) {
      return mapping;
    }
    if (isArray(mapping)) {
      return mapping.map(m => this.parseMapping(m)).join('');
    }
    if (isObject(mapping)) {
      const keys = Object.keys(mapping);
      if (keys.length === 1) {
        if (keys[0] === '.' || keys[0] === '|') {
          return `${keys[0]}${this.parseMapping(mapping[keys[0]])}`;
        }
        if (keys[0] === '[') {
          return '[' + mapping[keys[0]].map(m => this.parseMapping(m)).join(', ') + ']';
        }
        if (keys[0] === '(') {
          const [funcName, ...args] = mapping[keys[0]];
          return `${funcName}(${args.map(a => this.parseMapping(a)).join(', ')})`;
        }
        if (keys[0] === '{') {
          const obj = mapping[keys[0]];
          const keys2 = Object.keys(obj);
          return `{ ` + keys2.map(k => `${k}: ${this.parseMapping(obj[k])}`).join(', ') + ` }`;
        }
        return keys.map(k => `${k}${this.parseMapping(mapping[k])}`).join(', ');
      }
      return `{ ` + keys.map(k => `${k}: ${this.parseMapping(mapping[k])}`).join(', ') + ` }`;
    }
    return '';
  }

  getMappingResult(mapping) {
    if (isString(mapping)) {
      return mappingUtility({ data: this.model, context: this.context, state:this.stateService.state}, mapping);
    }
    if (isArray(mapping)) {
      return mapping.map(v => this.getMappingResult(v));
    }
    if (isObject(mapping)) {
      return Object.keys(mapping).reduce((a, key) => {
        a[key] = this.getMappingResult(mapping[key]);
        return a;
      }, {});
    }
    return mapping;
  }
}
