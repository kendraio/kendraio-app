import {
  DynamicFormControlLayout,
  DynamicInputControlModel,
  DynamicInputControlModelConfig,
  serializable
} from '@ng-dynamic-forms/core';

export const REFERENCE_DYNAMIC_FORM_CONTROL_TYPE = 'REFERENCE';


export interface DynamicReferenceInputControlConfig extends DynamicInputControlModelConfig<string> {
  relatedType?: string;
}

export class ReferenceFormModel extends DynamicInputControlModel<string> {

  // TODO: custom properties of this form model
  // @serializable() relatedType: string | null;
  @serializable() readonly type: string = REFERENCE_DYNAMIC_FORM_CONTROL_TYPE;

  constructor(config: DynamicReferenceInputControlConfig, layout?: DynamicFormControlLayout) {
    super(config, layout);
    // this.relatedType = config.relatedType || null;
  }

}
