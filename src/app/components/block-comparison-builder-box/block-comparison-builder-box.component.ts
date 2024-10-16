import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { clone, set, get } from "lodash-es";
import {
  comparisonOperators,
  comparisonTypes,
  comparisonDefinition,
} from "src/app/blocks/comparison/comparison.component";
import {
  FormControl,
  FormArray,
  FormGroup,
  UntypedFormControl,
} from "@angular/forms";
import def from "ajv/dist/vocabularies/discriminator";
import { moveItemInArray } from "@angular/cdk/drag-drop";

@Component({
  selector: "app-block-comparison-builder-box",
  templateUrl: "./block-comparison-builder-box.component.html",
  styleUrls: ["./block-comparison-builder-box.component.scss"],
})

/**
 * Defines an editor form for the comparison block type
 */
export class BlockComparisonBuilderBoxComponent implements OnInit {
  @Input() block;
  @Output() blockUpdated = new EventEmitter();

  valueGetter: string = "data";
  default: string = "OK";
  defaultType: string = comparisonTypes[0];
  comparisons: comparisonDefinition[];
  operators: string[];
  targetTypes: string[];
  form = new FormGroup({
    valueGetter: new FormControl(this.valueGetter),
    default: new FormControl(this.default),
    defaultType: new FormControl(this.defaultType),
    comparisons: new FormArray([]),
  });

  ngOnInit() {
    this.form.controls["valueGetter"].setValue(
      get(this.block, "valueGetter", this.valueGetter),
    );
    this.form.controls["default"].setValue(
      get(this.block, "default", this.default),
    );
    this.form.controls["defaultType"].setValue(
      get(this.block, "defaultType", this.defaultType),
    );
    this.operators = Object.keys(comparisonOperators);
    this.targetTypes = comparisonTypes;
    this.comparisons = get(this.block, "comparisons", []);

    this.comparisons.forEach((comparison) => {
      this.form.controls["comparisons"].push(
        new FormGroup({
          operator: new FormControl(comparison.operator),
          target: new FormControl(comparison.target),
          targetType: new FormControl(comparison.targetType || "value"),
          output: new FormControl(comparison.output),
          outputType: new FormControl(comparison.outputType || "value"),
        }),
      );
    });
  }

  /**
   * Converts the form into a block config object
   * @returns the new data model
   */
  getUpdatedModel(): any {
    let comparisons: comparisonDefinition[] = [];
    for (let comparisonGroup of this.form.controls.comparisons.controls) {
      let comparison = {
        operator: comparisonGroup.get("operator").value,
        target: comparisonGroup.get("target").value,
        targetType: comparisonGroup.get("targetType").value,
        output: comparisonGroup.get("output").value,
        outputType: comparisonGroup.get("outputType").value,
      };
      comparisons.push(comparison);
    }

    return {
      ...this.block,
      valueGetter: this.form.controls["valueGetter"].value,
      default: this.form.controls["default"].value,
      defaultType: this.form.controls["defaultType"].value,
      comparisons: comparisons,
    };
  }

  /**
   * Tests to see if multiple parameters are required
   * @param op The selected operation
   * @returns Returns true if the provided operator requires multiple parameters
   */
  opMultiParam(op: string): boolean {
    //console.log("o"+op)
    return comparisonOperators[op].paramcount == 2;
  }

  /**
   * Insert a new comparison object into the form
   */
  insertComparison(): void {
    this.form.controls["comparisons"].push(
      new FormGroup({
        operator: new FormControl("=="),
        target: new FormControl(""),
        targetType: new FormControl("value"),
        output: new FormControl(""),
        outputType: new FormControl("value"),
      }),
    );
  }

  /**
   * Remove a comparison when a user clicks the button
   * @param index
   */
  removeComparison(index) {
    let formArray = this.form.get("comparisons") as FormArray;
    formArray.removeAt(index);
  }

  /**
   * Handle the drag drop
   * @param event
   */
  drop(event): void {
    this.moveComparison(event.previousIndex, event.currentIndex);
  }

  /**
   * Moves an item in a FormArray to another position.
   * @param fromIndex Starting index of the item.
   * @param toIndex Index to which he item should be moved.
   */

  moveComparison(fromIndex: number, toIndex: number): void {
    const dir = toIndex > fromIndex ? 1 : -1;
    let formArray = this.form.get("comparisons") as FormArray;

    const item = formArray.at(fromIndex);
    for (let i = fromIndex; i * dir < toIndex * dir; i = i + dir) {
      const current = formArray.at(i + dir);
      formArray.setControl(i, current);
    }
    formArray.setControl(toIndex, item);
  }
}
