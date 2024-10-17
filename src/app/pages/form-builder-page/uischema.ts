import { config } from '../../_shared/ui-form/config';

export const UI_SCHEMA = {
  type: 'object',
  additionalProperties: {
    type: 'object',
    properties: {
      'ui:widget': {
        type: 'string',
        enum: ['datepicker', ...config.types.map(({ name }) => name)],
      },
      'ui:disabled': {
        type: 'boolean',
      },
      'ui:placeholder': {
        type: 'string',
      },
      'ui:labelProp': {
        type: 'string',
      },
      'ui:valueProp': {
        type: 'string',
      },
      'ui:isMultiSelect': {
        type: 'boolean',
      },
      'ui:addTag': {
        type: 'boolean',
      },
      'ui:ref': {
        type: 'string',
      },
      'ui:refType': {
        enum: ['json', 'http', 'fetch'],
      },
      'ui:errMessage': {
        type: 'object',
      },
      'ui:autosize': {
        type: 'boolean',
      },
      'ui:cols': {
        type: 'number',
      },
      'ui:rows': {
        type: 'number',
      },
      'ui:required': {
        type: 'boolean',
      },
    },
  },
};
