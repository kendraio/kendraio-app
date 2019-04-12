import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {
  DynamicFormControlComponent,
  DynamicFormControlCustomEvent,
  DynamicFormLayout,
  DynamicFormLayoutService, DynamicFormValidationService
} from '@ng-dynamic-forms/core';
import {FormControl, FormGroup} from '@angular/forms';
import {DebugFormModel} from '../debug-form-model';

@Component({
  selector: 'app-dynamic-debug-control',
  templateUrl: './dynamic-debug-control.component.html',
  styleUrls: ['./dynamic-debug-control.component.scss']
})
export class DynamicDebugControlComponent extends DynamicFormControlComponent implements OnInit {

  @Input() group: FormGroup;
  @Input() layout: DynamicFormLayout;
  @Input() model: DebugFormModel /* corresponding DynamicFormControlModel */;

  @Output() blur: EventEmitter<any> = new EventEmitter();
  @Output() change: EventEmitter<any> = new EventEmitter();
  @Output() customEvent: EventEmitter<DynamicFormControlCustomEvent> = new EventEmitter();
  @Output() focus: EventEmitter<any> = new EventEmitter();

  constructor(protected layoutService: DynamicFormLayoutService,
              protected validationService: DynamicFormValidationService) {

    super(layoutService, validationService);
  }

  ngOnInit() {
  }
}
