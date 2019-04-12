import {
  DynamicFormControlLayout,
  DynamicInputControlModel,
  DynamicInputControlModelConfig,
  serializable
} from '@ng-dynamic-forms/core';

export const DEBUG_DYNAMIC_FORM_CONTROL_TYPE = 'JSON_DEBUG';


export interface DynamicDebugControlConfig extends DynamicInputControlModelConfig<string> {
  // relatedType?: string;
}

export class DebugFormModel extends DynamicInputControlModel<string> {

  // TODO: custom properties of this form model
  // @serializable() relatedType: string | null;
  @serializable() readonly type: string = DEBUG_DYNAMIC_FORM_CONTROL_TYPE;

  constructor(config: DynamicDebugControlConfig, layout?: DynamicFormControlLayout) {
    super(config, layout);
    // this.relatedType = config.relatedType || null;
  }

}
