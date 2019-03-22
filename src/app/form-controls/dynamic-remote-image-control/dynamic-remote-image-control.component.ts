import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {
  DynamicFormControlComponent,
  DynamicFormControlCustomEvent,
  DynamicFormLayout,
  DynamicFormLayoutService, DynamicFormValidationService
} from '@ng-dynamic-forms/core';
import {FormGroup} from '@angular/forms';
import {RemoteImageModel} from '../remote-image-model';

@Component({
  selector: 'app-dynamic-remote-image-control',
  templateUrl: './dynamic-remote-image-control.component.html',
  styleUrls: ['./dynamic-remote-image-control.component.scss']
})
export class DynamicRemoteImageControlComponent extends DynamicFormControlComponent implements OnInit {

  @Input() group: FormGroup;
  @Input() layout: DynamicFormLayout;
  @Input() model: RemoteImageModel /* corresponding DynamicFormControlModel */;

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
