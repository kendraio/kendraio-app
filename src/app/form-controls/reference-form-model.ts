import {
  DynamicFormControlLayout,
  DynamicInputControlModel,
  DynamicInputControlModelConfig, DynamicInputModel,
  serializable
} from '@ng-dynamic-forms/core';

export const REFERENCE_DYNAMIC_FORM_CONTROL_TYPE = 'REFERENCE';

// TODO: Autocomplete label
// https://github.com/udos86/ng-dynamic-forms/pull/931/files

export interface DynamicReferenceInputControlConfig extends DynamicInputControlModelConfig<string> {
  relatedType?: string;
}

export class ReferenceFormModel extends DynamicInputModel {

  // TODO: custom properties of this form model
  // @serializable() relatedType: string | null;
  @serializable() readonly type: string = REFERENCE_DYNAMIC_FORM_CONTROL_TYPE;

  constructor(config: DynamicReferenceInputControlConfig, layout?: DynamicFormControlLayout) {
    super(config, layout);
    // this.relatedType = config.relatedType || null;
  }

}
