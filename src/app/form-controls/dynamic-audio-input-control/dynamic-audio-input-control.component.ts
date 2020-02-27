import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {
  DynamicFormControlComponent, DynamicFormControlCustomEvent,
  DynamicFormLayout,
  DynamicFormLayoutService,
  DynamicFormValidationService, DynamicInputModel
} from '@ng-dynamic-forms/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AudioInputControlComponent} from '../audio-input-control/audio-input-control.component';
import {AudioFormModel} from '../audio-form-model';

@Component({
  selector: 'app-dynamic-audio-input-control',
  templateUrl: './dynamic-audio-input-control.component.html',
  styleUrls: ['./dynamic-audio-input-control.component.scss']
})
export class DynamicAudioInputControlComponent extends DynamicFormControlComponent implements OnInit {

  @Input() group: FormGroup;
  @Input() layout: DynamicFormLayout;
  @Input() model: AudioFormModel /* corresponding DynamicFormControlModel */;

  @Output() blur: EventEmitter<any> = new EventEmitter();
  @Output() change: EventEmitter<any> = new EventEmitter();
  @Output() customEvent: EventEmitter<DynamicFormControlCustomEvent> = new EventEmitter();
  @Output() focus: EventEmitter<any> = new EventEmitter();

  @ViewChild(AudioInputControlComponent, { static: true }) audioInputControlComponent: AudioInputControlComponent;

  clipControl = new FormControl([]);

  constructor(protected layoutService: DynamicFormLayoutService,
              protected validationService: DynamicFormValidationService) {

    super(layoutService, validationService);
  }

  ngOnInit() {
  }

}
