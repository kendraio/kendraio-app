import {
  DYNAMIC_FORM_CONTROL_TYPE_ARRAY,
  DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX,
  DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX_GROUP,
  DYNAMIC_FORM_CONTROL_TYPE_COLORPICKER,
  DYNAMIC_FORM_CONTROL_TYPE_DATEPICKER,
  DYNAMIC_FORM_CONTROL_TYPE_EDITOR,
  DYNAMIC_FORM_CONTROL_TYPE_FILE_UPLOAD,
  DYNAMIC_FORM_CONTROL_TYPE_GROUP,
  DYNAMIC_FORM_CONTROL_TYPE_INPUT,
  DYNAMIC_FORM_CONTROL_TYPE_RADIO_GROUP,
  DYNAMIC_FORM_CONTROL_TYPE_RATING,
  DYNAMIC_FORM_CONTROL_TYPE_SELECT,
  DYNAMIC_FORM_CONTROL_TYPE_SLIDER,
  DYNAMIC_FORM_CONTROL_TYPE_SWITCH,
  DYNAMIC_FORM_CONTROL_TYPE_TEXTAREA, DYNAMIC_FORM_CONTROL_TYPE_TIMEPICKER,
  DynamicCheckboxGroupModel,
  DynamicCheckboxModel,
  DynamicColorPickerModel,
  DynamicDatePickerModel,
  DynamicEditorModel,
  DynamicFileUploadModel,
  DynamicFormArrayGroupModel,
  DynamicFormArrayModel,
  DynamicFormGroupModel,
  DynamicFormModel,
  DynamicFormService, DynamicFormValidationService,
  DynamicInputModel,
  DynamicRadioGroupModel,
  DynamicRatingModel,
  DynamicSelectModel,
  DynamicSliderModel,
  DynamicSwitchModel, DynamicTextAreaModel, DynamicTimePickerModel,
  isString,
  maskFromString,
  parseReviver
} from '@ng-dynamic-forms/core';
import { AUDIO_FILE_DYNAMIC_FORM_CONTROL_TYPE, AudioFormModel } from './audio-form-model';
import {IMAGE_FILE_DYNAMIC_FORM_CONTROL_TYPE, ImageFormModel} from './image-form-model';
import {REFERENCE_DYNAMIC_FORM_CONTROL_TYPE, ReferenceFormModel} from './reference-form-model';
import {BehaviorSubject} from 'rxjs';
import {Injectable} from '@angular/core';
import {ReferenceFieldService} from '../services/reference-field.service';

@Injectable()
export class CustomFormService extends DynamicFormService {

  constructor(
    validationService: DynamicFormValidationService,
    private readonly refs: ReferenceFieldService
  ) {
    super(validationService);
  }

  fromJSON(json: string | object[]): DynamicFormModel | never {

    const formModelJSON = isString(json) ? JSON.parse(json, parseReviver) : json,
      formModel: DynamicFormModel = [];

    formModelJSON.forEach((model: any) => {

      const layout = model.layout || null;

      switch (model.type) {

        case DYNAMIC_FORM_CONTROL_TYPE_ARRAY:
          const formArrayModel = model as DynamicFormArrayModel;

          if (Array.isArray(formArrayModel.groups)) {

            formArrayModel.groups.forEach((groupModel: DynamicFormArrayGroupModel) => {
              groupModel.group = this.fromJSON(groupModel.group) as DynamicFormModel;
            });
          }

          formArrayModel.groupFactory = () => {
            return this.fromJSON(formArrayModel.groupPrototype);
          };

          formModel.push(new DynamicFormArrayModel(model, layout));
          break;

        case DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX:
          formModel.push(new DynamicCheckboxModel(model, layout));
          break;

        case DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX_GROUP:
          model.group = this.fromJSON(model.group) as DynamicCheckboxModel[];
          formModel.push(new DynamicCheckboxGroupModel(model, layout));
          break;

        case DYNAMIC_FORM_CONTROL_TYPE_COLORPICKER:
          formModel.push(new DynamicColorPickerModel(model, layout));
          break;

        case DYNAMIC_FORM_CONTROL_TYPE_DATEPICKER:
          formModel.push(new DynamicDatePickerModel(model, layout));
          break;

        case DYNAMIC_FORM_CONTROL_TYPE_EDITOR:
          formModel.push(new DynamicEditorModel(model, layout));
          break;

        case DYNAMIC_FORM_CONTROL_TYPE_FILE_UPLOAD:
          model.value = null;
          formModel.push(new DynamicFileUploadModel(model, layout));
          break;

        case DYNAMIC_FORM_CONTROL_TYPE_GROUP:
          model.group = this.fromJSON(model.group);
          formModel.push(new DynamicFormGroupModel(model, layout));
          break;

        case DYNAMIC_FORM_CONTROL_TYPE_INPUT:
          const inputModel = model as DynamicInputModel;

          if (inputModel.mask !== null) {
            if (!(inputModel.mask instanceof Function)) {
              inputModel.mask = maskFromString(inputModel.mask as string);
            }
          }

          formModel.push(new DynamicInputModel(model, layout));
          break;

        case DYNAMIC_FORM_CONTROL_TYPE_RADIO_GROUP:
          formModel.push(new DynamicRadioGroupModel(model, layout));
          break;

        case DYNAMIC_FORM_CONTROL_TYPE_RATING:
          formModel.push(new DynamicRatingModel(model, layout));
          break;

        case DYNAMIC_FORM_CONTROL_TYPE_SELECT:
          formModel.push(new DynamicSelectModel(model, layout));
          break;

        case DYNAMIC_FORM_CONTROL_TYPE_SLIDER:
          formModel.push(new DynamicSliderModel(model, layout));
          break;

        case DYNAMIC_FORM_CONTROL_TYPE_SWITCH:
          formModel.push(new DynamicSwitchModel(model, layout));
          break;

        case DYNAMIC_FORM_CONTROL_TYPE_TEXTAREA:
          formModel.push(new DynamicTextAreaModel(model, layout));
          break;

        case DYNAMIC_FORM_CONTROL_TYPE_TIMEPICKER:
          formModel.push(new DynamicTimePickerModel(model, layout));
          break;

        case AUDIO_FILE_DYNAMIC_FORM_CONTROL_TYPE:
          formModel.push(new AudioFormModel(model, layout));
          break;

        case IMAGE_FILE_DYNAMIC_FORM_CONTROL_TYPE:
          formModel.push(new ImageFormModel(model, layout));
          break;

        case REFERENCE_DYNAMIC_FORM_CONTROL_TYPE:
          // formModel.push(new ReferenceFormModel(model, layout));

          if (model.listType !== null) {
//            console.log({ model });
            model.list = this.refs.getReferenceValues(model.listType);
          }

          formModel.push(new DynamicInputModel(model, layout));

          break;


        default:
          throw new Error(`unknown form control model type defined on JSON object with id "${model.id}"`);
      }
    });

    return formModel;
  }
}
