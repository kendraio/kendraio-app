import { Component, OnInit } from '@angular/core';
import { BaseBlockComponent } from '../base-block/base-block.component';
import { mappingUtility } from '../mapping-block/mapping-util';
import { SharedStateService } from 'src/app/services/shared-state.service';
import { clone, get } from 'lodash-es';

// define our types 
export type comparisonDefinition = {
  operator: string,
  target: string,
  targetType?: string,
  output: string
  outputType?: string,
}
export const comparisonTypes = [ "value", "jmespath"];
export var comparisonOperators = {
  '==': {
    'test': function (a: any, b: any): boolean { console.log(`a: ${a}  b:${b}`); return a == b },
    'paramcount': 2
  }, 
  '!=': {
    'test': function (a: any, b: any) { return a != b },
    'paramcount' : 2
  },
  '>': {
    'test' : function (a: any, b: any) { return a > b },
    'paramcount' : 2
  },
  '>=': {
    'test': function (a: any, b: any) { return a >= b },
    'paramcount' : 2,
  }, 
  '<': {
    'test': function (a: any, b: any) { return a < b },
    'paramcount':2
  },
  '<=': {
    'test': function (a: any, b: any) { return a <= b },
    'paramcount': 2,
  },
   
  'typeof': {
    'test': function (a: any, b: any) { return typeof a == b },
    'paramcount': 2,
  },
  // these are single value operators, b is ignored
  'null': {
    'test' : function (a: any, b: any) { return a === null },
    'paramcount' : 1
  },
  'not null': {
    'test': function (a: any, b: any) { return a !== null },
    'paramcount' : 1
  },
  'empty': {
    'test': function (a: any, b: any) { return a == '' },
    'paramcount' : 1
  },
  'not empty' : {
    'test': function (a: any, b: any) { return a != '' },
    'paramcount': 1
  }

} 

@Component({
  selector: 'app-comparison',
  templateUrl: './comparison.component.html',
  styleUrls: ['./comparison.component.scss']
})

export class ComparisonComponent extends BaseBlockComponent {
  // where to look for incoming data
  valueGetter: string = 'data';
  default = false;
  defaultType = comparisonTypes[0];


  // store the set of comparisons
  comparisons:comparisonDefinition[]=[];

  constructor(
    private stateService: SharedStateService
  ) {
    //stateService.state$.subscribe(state => { Promise.resolve(null).then(() => this.onData(this.model,false)); });
    super();
  }

  onConfigUpdate(config: any) {
    console.log('conf')
    this.valueGetter = get(config, 'valueGetter', 'data');
    this.comparisons = get(config, 'comparisons', []);
  }

  onData(data: any, firstChange: boolean) {
    console.log('data');
    console.log(data);
    // block is receiving data from the block before it in the flow
    // if you need to pass data to the next block, call emit on output 
    let output = this.compare();
    this.output.emit(output);
  }


  compare() {
    let data = this.model;
    
    const value = mappingUtility({ data, context: this.context, state: this.stateService.state }, this.valueGetter);
    console.log('begin compare');
    console.log(value);
    console.log(this.comparisons);

    let found = false;
    let checkCount = 0;
    let output: any = this.default; // set the default, in case we don't find anything

    // work through our comparisons one by one, stopping at the first match
    while (checkCount < this.comparisons.length && !found) {
      let check = this.comparisons[checkCount++];
      let target = check.target;
      console.log(check);
      if (check.targetType == 'jmespath') {
        target = mappingUtility({ data, context: this.context, state: this.stateService.state }, check.target);
      }
      if (check.operator in comparisonOperators) {
        console.log(`got operator: ${check.operator}`);
        const op = comparisonOperators[check.operator].test;
        console.log(op);
        console.log(typeof op);
        if (op(value, target)) {
          console.log('found');
          
          found = true;
          output = check.output;
          if (check.outputType == 'jmespath') {
            output = mappingUtility({ data, context: this.context, state: this.stateService.state }, check.output);
          }
        }
      }
    }
    return output;
  }

}
