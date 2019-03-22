import {DynamicFormControlLayout, DynamicInputControlModel, DynamicInputControlModelConfig, serializable} from '@ng-dynamic-forms/core';

export const REMOTE_IMAGE_DYNAMIC_FORM_CONTROL_TYPE = 'REMOTE_IMAGE';

export interface DynamicRemoteImageControlConfig extends DynamicInputControlModelConfig<string> {
  // relatedType?: string;
}

export class RemoteImageModel extends DynamicInputControlModel<string> {

  // TODO: custom properties of this form model
  // @serializable() relatedType: string | null;
  @serializable() readonly type: string = REMOTE_IMAGE_DYNAMIC_FORM_CONTROL_TYPE;

  constructor(config: DynamicRemoteImageControlConfig, layout?: DynamicFormControlLayout) {
    super(config, layout);
    // this.relatedType = config.relatedType || null;
  }
}
