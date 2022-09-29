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
  lastState = null;

  hasError = false;
  errorMessage = '';
  ignoreState = false;
  stateChangeInitTimestamps = [];
  stateDeferTime = 100;

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
    // extract the state keys used in the mapping, they are in the format of state.[global/local].[key]
    const stateKeys = this.mapping.match(/state\.(global|local)\.[a-zA-Z0-9_]+/g);
    // does the state differ for the any state keys that are used in the mapping?
    const lastStateJSON = JSON.parse(this.lastState);
    let differingKeys = []; 
    const stateKeyDiffers = stateKeys && stateKeys.length > 0 && stateKeys.some(key => {
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

    if (stateKeyDiffers) {
      //console.log('mapping state change', JSON.stringify(differingKeys), this.stateDeferTime, window['stateLoopRisks']);
      const now = new Date().getTime();
      this.stateChangeInitTimestamps.push(now);
      const lastSecond = now - 1000;
      const stateChangesInLastSecond = this.stateChangeInitTimestamps.filter(t => t > lastSecond);
      if (stateChangesInLastSecond.length > 2) {
        // We probably are in a loop, so we ignore most of the state changes
        // Just in case we are not in a loop, we assign a single defered state change using setTimeout if there is not already one pending then return to ignore the current change for now
        
        // we multiply stateDeferTime each time we get a state change
        this.stateDeferTime = Math.min(Math.floor(this.stateDeferTime * 1.2), 3000);

        // there can be multiple mapping blocks on the page, so we need to make sure we only have one defered state change pending
        // we use window['stateDeferedTimer'] to make sure we only have one defered state change pending
        // to track possible loops, we use an array at window['stateLoopRisks'] to append the current mapping block info
        
        window['stateLoopRisks'] = window['stateLoopRisks'] || [];
        // we add our mapping string to the stateLoopRisks array with a timestamp
        window['stateLoopRisks'].push({mapping: this.mapping, timestamp: now});

        // we look for fellow loop risks, identify the chain structure and log it:
        const loopRisks = window['stateLoopRisks'];

        if (loopRisks.length > 1) {
          const loopRiskChains = loopRisks.map(r => r.mapping);
          console.log('loop risk chain', loopRiskChains);
        }
        if (window['stateDeferedTimer'] === null) {

          if (loopRisks.length > 1) {
            const loopRiskChains = loopRisks.map(r => r.mapping);
            console.log('loop risk chain', loopRiskChains);
          }

          window['stateDeferedTimer'] = setTimeout(() => {
            window['stateDeferedTimer'] = null;
            // now we trigger the state change
            this.ngOnChanges({});
          }, this.stateDeferTime);
        }
        return;

      }
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
