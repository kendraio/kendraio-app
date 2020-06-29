import { Component, OnInit } from '@angular/core';
import {PageTitleService} from '../../services/page-title.service';
import {ConnectionManagerService} from '../../services/connection-manager.service';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.scss']
})
export class ConnectComponent implements OnInit {

  config = {
    columnDefs: [
      { headerName: 'id', field: 'id', },
      { headerName: 'title', field: 'title', },
      { headerName: 'project', field: 'adapterName', },
      // { headerName: 'modified', field: 'modified', },
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
                          type: 'message',
                          title: '{{ data.title }}'
                        },
                        {
                          type: 'gosub',
                          configGetter: '{ adapterName: data.adapterName, workflowId: data.id }',
                          contextGetter: '{ app: { adapterName: data.adapterName }}'
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
    this.connectionManager.init();
  }

}
