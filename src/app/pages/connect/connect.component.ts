import { Component, OnInit } from '@angular/core';
import {PageTitleService} from '../../services/page-title.service';
import {ConnectionManagerService} from '../../services/connection-manager.service';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.scss']
})
export class ConnectComponent implements OnInit {

  isLoading = true;

  config = {
    columnDefs: [
      { headerName: 'id', field: 'id', },
      { headerName: 'title', field: 'title', },
      { headerName: 'project', field: 'adapterName', },
      {
        headerName: 'Last verified',
        cellRenderer: 'connectionStatusRenderer'
      },
      {
        headerName: 'Launch',
        cellRenderer: 'workflowRenderer',
        width: 120,
        cellRendererParams: {
          blocks: [
            {
              type: 'switch',
              valueGetter:
                'length(split(replace(replace(not_null(data.tags[?starts_with(@, `start:`)] | [0], ``), `start:/`, ``), `start:`, ``), `/`)) == `2` && ' +
                'split(replace(replace(not_null(data.tags[?starts_with(@, `start:`)] | [0], ``), `start:/`, ``), `start:`, ``), `/`)[0] != `` && ' +
                'split(replace(replace(not_null(data.tags[?starts_with(@, `start:`)] | [0], ``), `start:/`, ``), `start:`, ``), `/`)[1] != ``',
              cases: [
                {
                  value: true,
                  blocks: [
                    {
                      type: 'link-action',
                      label: 'Launch',
                      adapterNameGetter:
                        'split(replace(replace(not_null(data.tags[?starts_with(@, `start:`)] | [0], ``), `start:/`, ``), `start:`, ``), `/`)[0]',
                      workflowIdGetter:
                        'split(replace(replace(not_null(data.tags[?starts_with(@, `start:`)] | [0], ``), `start:/`, ``), `start:`, ``), `/`)[1]'
                    }
                  ]
                }
              ],
              default: {
                blocks: []
              }
            }
          ]
        }
      },
      {
        'cellRenderer': 'workflowRenderer',
        'cellRendererParams': {
          'blocks': [
            {
              'type': 'actions',
              'buttons': [
                {
                  'label': 'Connect',
                  'blocks': [
                    {
                      'type': 'dialog',
                      'blocks': [
                        {
                          type: 'context-save',
                          contextKey: 'authParamInfo'
                        },
                        {
                          type: 'message',
                          title: '{{ data.title }}'
                        },
                        {
                          type: 'gosub',
                          configGetter: '{ adapterName: data.adapterName, workflowId: data.id }',
                          contextGetter: '{ app: { adapterName: data.adapterName }}',
                          // TODO: load default model from saved params
                          modelGetter: '`{}`'
                          // TODO: capture workflow output and save as connect params
                        },
                        {
                          type: 'variable-set',
                          name: 'auth',
                          notify: false,
                          nameGetter: 'join(`__`, [`connect`, context.authParamInfo.adapterName, context.authParamInfo.workflowId])'
                        },
                        {
                          type: 'variable-set',
                          name: 'auth',
                          notify: false,
                          valueGetter: 'now()',
                          nameGetter:
                            'join(`__`, [`connect`, context.authParamInfo.adapterName, context.authParamInfo.workflowId, `updated`])'
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      }
    ]
  };

  constructor(
    public readonly connectionManager: ConnectionManagerService,
    private readonly pageTitle: PageTitleService,
  ) { }

  ngOnInit() {
    this.pageTitle.setTitle('User settings');
    this.connectionManager.init().then(() => this.isLoading = false);
  }

}
