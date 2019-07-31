import {Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {
  DynamicFormControlComponent,
  DynamicFormControlCustomEvent,
  DynamicFormLayout,
  DynamicFormLayoutService,
  DynamicFormValidationService,
  DynamicInputModel
} from '@ng-dynamic-forms/core';

import {ImageInputControlComponent} from '../image-input-control/image-input-control.component';
import {ImageFormModel} from '../image-form-model';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-dynamic-image-input-control',
  templateUrl: './dynamic-image-input-control.component.html',
  styleUrls: ['./dynamic-image-input-control.component.scss']
})
export class DynamicImageInputControlComponent extends DynamicFormControlComponent implements OnInit, OnDestroy {

  @Input() group: FormGroup;
  @Input() layout: DynamicFormLayout;
  @Input() model: ImageFormModel /* corresponding DynamicFormControlModel */;

  @Output() blur: EventEmitter<any> = new EventEmitter();
  @Output() change: EventEmitter<any> = new EventEmitter();
  @Output() customEvent: EventEmitter<DynamicFormControlCustomEvent> = new EventEmitter();
  @Output() focus: EventEmitter<any> = new EventEmitter();

  @ViewChild(ImageInputControlComponent, { static: true }) imageInputControlComponent: ImageInputControlComponent;

  tagControl = new FormControl([]);

  destroy$ = new Subject();

  constructor(protected layoutService: DynamicFormLayoutService,
              protected validationService: DynamicFormValidationService) {

    super(layoutService, validationService);
  }

  ngOnInit() {
    this.tagControl = this.group.get('tags') as FormControl;
    // this.tagControl.valueChanges
    //   .pipe(
    //     takeUntil(this.destroy$)
    //   )
    //   .subscribe(
    //     tags => this.group.patchValue({ tags })
    //   );
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

}
