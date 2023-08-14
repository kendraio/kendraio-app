import { Component, OnInit } from '@angular/core';
import {FieldArrayType, FormlyFieldConfig, FormlyFormBuilder} from '@ngx-formly/core';
import {AddBlockDialogComponent} from '../../dialogs/add-block-dialog/add-block-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import {UntypedFormArray} from '@angular/forms';
import {EDITOR_OPTIONS} from '../../components/block-builder-box/editor-options';

export class WorkflowType {
  name: string;
  templateOptions: { label?: string };
  fieldGroup: FormlyFieldConfig[];
}

export interface WorkflowFieldConfig extends FormlyFieldConfig {
  types: WorkflowType[];
  defaultTypes: string[];
}

@Component({
  selector: 'app-formly-workflow-field',
  templateUrl: './formly-workflow-field.component.html',
  styleUrls: ['./formly-workflow-field.component.scss']
})
export class FormlyWorkflowFieldComponent extends FieldArrayType<WorkflowFieldConfig> implements OnInit {

  editorOptions = EDITOR_OPTIONS;

  constructor(
    private readonly dialog: MatDialog
  ) {
    super();
  }

  ngOnInit() {
  }

  addTask() {
    const dialogRef = this.dialog.open(AddBlockDialogComponent, {
      width: '460px'
    });
    dialogRef.afterClosed().subscribe(newTask => {
      if (!!newTask) {
        this.add(null, newTask);
      }
    });
  }

  drop({ previousIndex, currentIndex }) {
    const item = (this.formControl as UntypedFormArray).at(previousIndex).value;
    this.remove(previousIndex);
    this.add(currentIndex, item);
  }
}
