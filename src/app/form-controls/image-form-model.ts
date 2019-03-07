import {
  DynamicFormControlLayout,
  DynamicInputControlModel,
  DynamicInputControlModelConfig,
  serializable
} from '@ng-dynamic-forms/core';

export const IMAGE_FILE_DYNAMIC_FORM_CONTROL_TYPE = 'IMAGE_FILE';


export interface DynamicImageInputControlConfig extends DynamicInputControlModelConfig<string> {
  relatedType?: string;
}

export class ImageFormModel extends DynamicInputControlModel<string> {

  // TODO: custom properties of this form model
  // @serializable() relatedType: string | null;
  @serializable() readonly type: string = IMAGE_FILE_DYNAMIC_FORM_CONTROL_TYPE;

  constructor(config: DynamicImageInputControlConfig, layout?: DynamicFormControlLayout) {
    super(config, layout);
    // this.relatedType = config.relatedType || null;
  }

}
