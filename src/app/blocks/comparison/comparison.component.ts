import { Component, OnInit } from '@angular/core';
import { BaseBlockComponent } from '../base-block/base-block.component';
import { mappingUtility } from '../mapping-block/mapping-util';
import { SharedStateService } from 'src/app/services/shared-state.service';
import { clone, get } from 'lodash-es';

/**
 * The comparison block takes a source value, and then performs a set
 * of tests against it. If any test is successful, processing stops
 * and it will return an output value related to that test.
 *
 * The source (input) value is always a jmespath expression.
 *
 *
 */

/**
 * Target and output data can be either string values, or jmespath expressions
 * Types are "value" by default
 */
export const comparisonTypes = ['value', 'jmespath'];

/**
 *  Each comparison is defined using this structure
 */
export type comparisonDefinition = {
  operator: string; // the comparion operator (see the operator defintions)
  target: string; // The target to of the comparison (if it's needed)
  targetType?: string; // what type of value are we looking at
  output: string; // What value should be returned on a successful test
  outputType?: string; // What type of output to work with
};

/**
 * Comparisons use a set of predefined operators to do it's thing.
 *
 */

/**
 * Each comparison definition must provide a test function,
 * and declare how many parameters it expects
 *
 */
export type comparisonOperator = {
  test: boolean; // Tests must be boolean, they probably useless if not defined as functions
  paramCount: number; // 1 or 2
};

/**
 * The available operators are defined as an object.
 *
 */
export type comparisonOperatorList = {
  [op: string]: comparisonOperator;
};

/**
 *  The list of available comparison operators.
 *
 */
export var comparisonOperators = {
  '==': {
    test: function (a: any, b: any): boolean {
      console.log(`a: ${a}  b:${b}`);
      return a == b;
    },
    paramcount: 2,
  },
  '!=': {
    test: function (a: any, b: any): boolean {
      return a != b;
    },
    paramcount: 2,
  },
  '>': {
    test: function (a: any, b: any): boolean {
      return a > b;
    },
    paramcount: 2,
  },
  '>=': {
    test: function (a: any, b: any): boolean {
      return a >= b;
    },
    paramcount: 2,
  },
  '<': {
    test: function (a: any, b: any): boolean {
      return a < b;
    },
    paramcount: 2,
  },
  '<=': {
    test: function (a: any, b: any): boolean {
      return a <= b;
    },
    paramcount: 2,
  },

  typeof: {
    test: function (a: any, b: any): boolean {
      return typeof a == b;
    },
    paramcount: 2,
  },
  // these are single value operators, b is ignored
  null: {
    test: function (a: any, b: any): boolean {
      return a === null;
    },
    paramcount: 1,
  },
  'not null': {
    test: function (a: any, b: any): boolean {
      return a !== null;
    },
    paramcount: 1,
  },
  empty: {
    test: function (a: any, b: any): boolean {
      return a == '';
    },
    paramcount: 1,
  },
  'not empty': {
    test: function (a: any, b: any): boolean {
      return a != '';
    },
    paramcount: 1,
  },
};

@Component({
  selector: 'app-comparison',
  templateUrl: './comparison.component.html',
  styleUrls: ['./comparison.component.scss'],
})
export class ComparisonComponent extends BaseBlockComponent {
  // where to look for incoming data
  valueGetter: string = 'data';
  default = false;
  defaultType = comparisonTypes[0];

  // store the set of comparisons
  comparisons: comparisonDefinition[] = [];

  constructor(private stateService: SharedStateService) {
    //stateService.state$.subscribe(state => { Promise.resolve(null).then(() => this.onData(this.model,false)); });
    super();
  }

  onConfigUpdate(config: any) {
    this.valueGetter = get(config, 'valueGetter', 'data');
    this.comparisons = get(config, 'comparisons', []);
    this.default = get(config, 'default', false);
    this.defaultType = get(config, 'defaultType', 'value');
  }

  onData(data: any, firstChange: boolean) {
    let output = this.compare();
    this.output.emit(output);
  }

  /**
   * Validates a comparison definition
   * @param comparison a comparison object
   * @returns true if valid
   */
  isValid(comparison: comparisonDefinition): boolean {
    let valid: boolean = false;
    // first, we need an operator
    if (comparison.operator in comparisonOperators) {
      if (comparisonOperators[comparison.operator].paramcount == 1) {
        // if we have only one operator, we only want to validate our output if it's
        // a jmespath expression.
        if (comparison.outputType == 'jmespath') {
          // make sure that we have some output content
          if (comparison.output.length > 0) {
            valid = true;
          }
        } else {
          // any output is valid if its a value
          valid = true;
        }
      } else if (comparisonOperators[comparison.operator].paramcount == 2) {
        // if we have two parameters, we need to make sure that the
        // second parameter is valid
        if (comparison.target.length > 0) {
          valid = true;
        }
      }
    }
    return valid;
  }

  /**
   * Performs a comparison
   * @returns output defined by comparison operator
   */
  compare(): any {
    let data = this.model;

    const value = mappingUtility(
      { data, context: this.context, state: this.stateService.state },
      this.valueGetter
    );

    let found = false;
    let checkCount = 0;
    let output: any;
    console.log('d:' + this.defaultType);
    if (this.defaultType == 'jmespath') {
      output = mappingUtility(
        { data, context: this.context, state: this.stateService.state },
        this.default
      );
    } else {
      output = this.default; // set the default, in case we don't find anything
    }

    // work through our comparisons one by one, stopping at the first match
    while (checkCount < this.comparisons.length && !found) {
      let check = this.comparisons[checkCount++];
      // only bother with valid checks
      if (this.isValid(check)) {
        let target = check.target;
        if (check.targetType == 'jmespath') {
          target = mappingUtility(
            { data, context: this.context, state: this.stateService.state },
            check.target
          );
        }
        if (check.operator in comparisonOperators) {
          // the operators object provides the test function
          const op = comparisonOperators[check.operator].test;

          if (op(value, target)) {
            found = true;
            output = check.output;
            if (check.outputType == 'jmespath') {
              output = mappingUtility(
                { data, context: this.context, state: this.stateService.state },
                check.output
              );
            }
          }
        }
      }
    }
    return output;
  }
}
