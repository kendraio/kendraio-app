import {
  DynamicFormControlLayout,
  DynamicInputControlModel,
  DynamicInputControlModelConfig,
  serializable
} from '@ng-dynamic-forms/core';

export const AUDIO_FILE_DYNAMIC_FORM_CONTROL_TYPE = 'AUDIO_FILE';


export interface DynamicAudioInputControlConfig extends DynamicInputControlModelConfig<string> {
  relatedType?: string;
}

export class AudioFormModel extends DynamicInputControlModel<string> {

  // TODO: custom properties of this form model
  // @serializable() relatedType: string | null;
  @serializable() readonly type: string = AUDIO_FILE_DYNAMIC_FORM_CONTROL_TYPE;

  constructor(config: DynamicAudioInputControlConfig, layout?: DynamicFormControlLayout) {
    super(config, layout);
    // this.relatedType = config.relatedType || null;
  }

}
