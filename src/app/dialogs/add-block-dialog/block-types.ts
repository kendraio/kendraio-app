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
    type: 'card',
    label: 'Card',
    description: 'Wrap a workflow with card styling.',
    icon: 'fa-square',
    hasEditor: true,
    defaultConfig: {
      type: 'card',
      blocks: []
    }
  },
  {
    type: 'chart',
    label: 'Chart',
    description: 'Display values in a configurable chart.',
    icon: 'fa-chart-pie',
    hasEditor: true,
    defaultConfig: {
      type: 'chart'
    }
  },
  {
    type: 'csv-export',
    label: 'CSV Export',
    description: 'Export data to a CSV file',
    icon: 'cloud_download',
    hasEditor: true,
    defaultConfig: {
      type: 'csv-export',
      header: true,
      skipEmptyLines: true
    }
  },
  {
    type: 'csv-import',
    label: 'CSV Import',
    description: 'Import data from a CSV file',
    icon: 'cloud_upload',
    hasEditor: true,
    defaultConfig: {
      type: 'csv-import',
      header: true,
      skipEmptyLines: true
    }
  },
  {
    type: 'debug',
    label: 'Debug',
    description: 'Output the current data model values and list available contextual values.',
    icon: 'fa-bug',
    hasEditor: true,
    defaultConfig: {
      type: 'debug',
      open: 1,
      showContext: false
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
    type: 'faker',
    label: 'Faker',
    description: 'Generate fake data that conforms to a schema',
    icon: 'fa-seedling',
    hasEditor: true,
    defaultConfig: {
      type: 'faker',
      jsonSchema: {}
    }
  },
  {
    type: 'file-export',
    label: 'File Export',
    description: 'Export to a local data file.',
    icon: 'cloud_download',
    hasEditor: true,
    defaultConfig: {
      type: 'file-export',
      label: 'Export',
      fileName: 'exported'
    }
  },
  {
    type: 'file-input',
    label: 'File Input',
    description: 'Select and read a local data file.',
    icon: 'attach_file',
    hasEditor: true,
    defaultConfig: {
      type: 'file-input',
      label: 'Import',
      accept: ['csv', 'json', 'xml']
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
      gridOptions: {}
    }
  },
  {
    type: 'http',
    label: 'HTTP Request',
    description: 'Get, put or post data to an external HTTP endpoint.',
    icon: 'cloud',
    hasEditor: true,
    defaultConfig: {
      'type': 'http',
      'method': 'get',
      'endpoint': {
        'protocol': 'https:',
        'host': 'jsonplaceholder.typicode.com',
        'pathname': '/posts',
        'query': {
          userId: 1
        }
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
    type: 'image',
    label: 'Image',
    description: 'Add view image/thumb',
    icon: 'fa-image',
    hasEditor: true,
    defaultConfig: {
      type: 'image',
      imgUrl: '',
      title: ''
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
    type: 'parse-data',
    label: 'Parse Data',
    description: 'Parse data from incoming content',
    icon: 'fa-map-signs',
    hasEditor: true,
    defaultConfig: {
      type: 'parse-data',
      csvOptions: {
        header: true,
        skipEmptyLines: true
      },
      xmlOptions: {

      }
    }
  },
  {
    type: 'db',
    label: 'Local DB',
    description: 'Retrieve and update information in the local data store',
    icon: 'fa-database',
    hasEditor: true,
    defaultConfig: {
      type: 'db',
      operation: 'put',
      adapterName: 'UNKNOWN',
      schema: 'none'
    }
  },
  {
    type: 'reference',
    label: 'Reference Widget',
    description: 'Select an item to use as a reference',
    icon: 'fa-retweet',
    hasEditor: true,
    defaultConfig: {
      type: 'reference'
    }
  },
  {
    type: 'serialize',
    label: 'Serialize Data',
    description: 'Parse data from incoming content',
    icon: 'fa-map-signs',
    hasEditor: true,
    defaultConfig: {
      type: 'serialize',
      hasFormatSelection: true,
      formats: [
        'json',
        'csv',
        'xml'
      ],
      csvOptions: {
        header: true,
        skipEmptyLines: true
      },
      xmlOptions: {

      }
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
  },
  {
    type: 'context-save',
    label: 'Context (Save)',
    description: 'Save a value into context',
    icon: 'fa-stamp',
    defaultConfig: {
      type: 'context-save',
      contextKey: 'saved'
    },
    hasEditor: true
  },
  {
    type: 'context',
    label: 'Context',
    description: 'Load a value into context',
    icon: 'fa-stamp',
    defaultConfig: {
      type: 'context',
      contextPath: 'newValue',
      contextBlocks: [],
      blocks: []
    },
    hasEditor: true
  },
  {
    type: 'adapter-list',
    label: 'Adapter list',
    description: 'Get a list of all installed adapters',
    icon: 'extension',
    defaultConfig: {
      type: 'adapter-list'
    },
    hasEditor: true
  },
  {
    type: 'adapter-info',
    label: 'Adapter info',
    description: 'Get metadata for a specific adapter',
    icon: 'extension',
    defaultConfig: {
      type: 'adapter-info',
      adapterName: '[UNKNOWN]',
    },
    hasEditor: true
  },
  {
    type: 'auth0',
    label: 'Auth0',
    description: 'Fetch access details from Auth0',
    icon: 'person',
    hasEditor: true,
    defaultConfig: {
      type: 'auth0',
      provider: 'google-oauth2'
    }
  },
  {
    type: 'read-file',
    label: 'Read file',
    description: 'Read contents of a file object',
    icon: 'insert_drive_file',
    hasEditor: true,
    defaultConfig: {
      type: 'read-file',
      readMode: 'dataUrl',
      fileGetter: 'data',
      mode: 'update',
      skipFirst: true
    }
  },
  {
    type: 'gosub',
    label: 'Subroutine',
    description: 'Embed another workflow or partial workflow',
    icon: 'autorenew',
    hasEditor: true,
    defaultConfig: {
      type: 'gosub'
    }
  },
  {
    type: 'launch',
    deprecated: true,
    hasEditor: true
  },
  {
    type: 'query',
    deprecated: true,
    hasEditor: true
  },
  // {
  //   type: 'video-uploader',
  //   label: 'Vimeo Upload (Vimeo)',
  //   description: 'Upload a Video to Vimeo Only',
  //   icon: 'fa-video',
  //   hasEditor: true,
  //   defaultConfig: {
  //     type: 'video-upload',
  //     accept: 'application/vnd.vimeo.*+json;version=3.4'
  //   }
  // },
  {
    type: 'gsheet',
    label: 'Google Spreadsheet',
    description: 'Use a Google Spreadsheet as a data source',
    icon: 'fa-table',
    hasEditor: true,
    defaultConfig: {
      type: 'gsheet',
      key: 'https://docs.google.com/spreadsheets/d/1sbyMINQHPsJctjAtMW0lCfLrcpMqoGMOJj6AN-sNQrc/pubhtml'
    }
  }
];
