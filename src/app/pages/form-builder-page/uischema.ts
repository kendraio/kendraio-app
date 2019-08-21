import {config} from '../../_shared/ui-form/config';

export const UI_SCHEMA = {
  type: 'object',
  additionalProperties: {
    type: 'object',
    properties: {
      'ui:widget': {
        'type': 'string',
        'enum': [
          'datepicker',
          ...config.types.map(({ name }) => name)
        ]
      },
      'ui:disabled': {
        'type': 'boolean'
      },
      'ui:placeholder': {
        'type': 'string'
      },
      'ui:labelProp': {
        type: 'string'
      },
      'ui:valueProp': {
        type: 'string'
      },
      'ui:isMultiSelect': {
        type: 'boolean'
      },
      'ui:ref': {
        type: 'string'
      },
      'ui:refType': {
        enum: ['json', 'http', 'fetch']
      }
    }
  }
};