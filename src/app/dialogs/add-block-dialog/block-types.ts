export const BLOCK_TYPES = [
  {
    type: 'actions',
    label: 'Actions',
    description: 'Display a row of action buttons with related workflows.',
    icon: 'edit_attributes',
    hasEditor: true,
    defaultConfig: {
      type: 'actions',
      buttons: [
        {
          label: 'Action',
          color: 'default',
          blocks: []
        }
      ]
    }
  },
  {
    type: 'batch',
    label: 'Batch process',
    description: 'Run a selected workflow against every item in a list.',
    icon: 'fa-list',
    hasEditor: true,
    defaultConfig: {
      type: 'batch',
      blocks: []
    }
  },
  {
    type: 'chart',
    label: 'Chart',
    description: 'Display values in a configurable chart.',
    icon: 'fa-chart-pie',
    defaultConfig: {
      type: 'chart'
    }
  },
  {
    type: 'debug',
    label: 'Debug',
    description: 'Output the current data model values and list available contextual values.',
    icon: 'fa-bug',
    defaultConfig: {
      type: 'debug'
    }
  },
  {
    type: 'dialog',
    label: 'Dialog',
    description: 'Launch a modal dialog in which to run an embedded workflow.',
    icon: 'fa-running',
    hasEditor: true,
    defaultConfig: {
      type: 'dialog',
      blocks: []
    }
  },
  {
    type: 'dispatch',
    label: 'Event dispatch',
    description: 'Dispatch an event to trigger asynchronous processing',
    icon: 'fa-rocket',
    hasEditor: true,
    defaultConfig: {
      type: 'dispatch',
      action: '[TASK_NAME]'
    }
  },
  {
    type: 'form',
    label: 'Form',
    description: 'Display a form for data entry or editing.',
    icon: 'fa-keyboard',
    hasEditor: true,
    defaultConfig: {
      type: 'form',
      jsonSchema: {},
      uiSchema: {}
    }
  },
  {
    type: 'grid',
    label: 'Data grid',
    description: 'Display a data grid of the current modal data values',
    icon: 'fa-table',
    hasEditor: true,
    defaultConfig: {
      type: 'grid',
      gridOptions: {},
      columnDefs: []
    }
  },
  {
    type: 'http',
    label: 'HTTP Request',
    description: 'Get, put or post data to an external HTTP endpoint.',
    icon: 'cloud',
    hasEditor: true,
    defaultConfig: {
      type: 'http',
      method: 'get',
      endpoint: {
        protocol: 'https',
        host: '',
        pathname: '',
        query: []
      }
    }
  },
  {
    type: 'init',
    label: 'Initialisation',
    description: 'Initialise workflow processing on page load.',
    icon: 'fa-play',
    defaultConfig: {
      type: 'init'
    }
  },
  {
    type: 'mapping',
    label: 'Mapping',
    description: 'Map data using JMESPath',
    icon: 'sync',
    hasEditor: true,
    defaultConfig: {
      type: 'mapping',
      mapping: 'data'
    }
  },
  {
    type: 'message',
    label: 'Message',
    description: 'Display a customisable message based on the current data modal values.',
    icon: 'message',
    hasEditor: true,
    defaultConfig: {
      type: 'message',
      message: ''
    }
  },
  {
    type: 'multi',
    label: 'Multiplex',
    description: 'Display and process multiple workflows concurrently.',
    icon: 'fa-stream',
    hasEditor: true,
    defaultConfig: {
      type: 'multi',
      batches: []
    }
  },
  {
    type: 'query',
    label: 'Query',
    description: 'Run a configurable query against a data source.',
    icon: 'fa-database',
    hasEditor: true,
    defaultConfig: {
      type: 'query'
    }
  },
  {
    type: 'switch',
    label: 'Switch',
    description: 'Conditionally run workflows based on evaluation of input value.',
    icon: 'fa-random',
    hasEditor: true,
    defaultConfig: {
      type: 'switch',
      eval: 'data',
      branches: []
    }
  },
  {
    type: 'template',
    label: 'Template',
    description: 'Display templated output based on current modal values.',
    icon: 'fa-file-code',
    hasEditor: true,
    defaultConfig: {
      type: 'template',
      template: ''
    }
  },
  {
    type: 'variable-get',
    label: 'Get variable',
    description: 'Fetch a value from local storage.',
    icon: 'file_upload',
    hasEditor: true,
    defaultConfig: {
      type: 'variable-get',
      name: '[VARIABLE_NAME]'
    }
  },
  {
    type: 'variable-set',
    label: 'Set variable',
    description: 'Save a value to local storage.',
    icon: 'file_download',
    hasEditor: true,
    defaultConfig: {
      type: 'variable-set',
      name: '[VARIABLE_NAME]'
    }
  }
];
