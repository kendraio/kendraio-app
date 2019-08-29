import {Component, OnInit} from '@angular/core';
import {get} from 'lodash-es';
import {moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-blocks-builder-page',
  templateUrl: './blocks-builder-page.component.html',
  styleUrls: ['./blocks-builder-page.component.scss']
})
export class BlocksBuilderPageComponent implements OnInit {

  blocks = [
    {
      type: 'form',
      adapter: 'kendraio',
      formId: 'search-limit'
    },
    {
      type: 'debug'
    },
    {
      type: 'query',
      'dataSource': {
        'type': 'remote',
        'endpoint': {
          'protocol': 'https:',
          'host': 'teosto-cors-proxy-eilgg5e92.now.sh',
          'pathname': '/dev/rest/work/perTitle/HEART',
          'query': {
            'limit': 4
          },
          'valueGetters': {
            'pathname': 'join(\'\', [\'/dev/rest/work/perTitle/\', model.term])',
            'query': '{limit: model.limit}'
          }
        },
        'authentication': {
          'type': 'basic-auth',
          'valueGetters': {
            'username': 'user.teosto.username',
            'password': 'user.teosto.password'
          }
        }
      },
    },
    {
      type: 'debug'
    },
    {
      type: 'mapping',
      mapping: 'result[].{ workkey: workkey, titles: titles[].work_title, performer: performers.name, right_owners: right_owners[].name }'
    },
    {
      type: 'debug'
    },
    {
      type: 'grid',
      'columnDefs': [
        {
          'headerName': 'Work key',
          'field': 'workkey'
        },
        {
          'headerName': 'Titles',
          'valueGetter': 'titles'
        },
        {
          'headerName': 'Performer',
          'valueGetter': 'performer'
        },
        {
          'headerName': 'Rights owners',
          'valueGetter': 'right_owners'
        }
      ]
    }
  ];

  models = [];

  constructor() { }

  ngOnInit() {
    this.models = this.blocks.map(blockDef => get(blockDef, 'defaultValue', {}));
    this.models.push({});
  }

  updateModel(modelNumber, value) {
    // console.log({ modelNumber, value });
    this.models = [...this.models.slice(0, modelNumber), value, ...this.models.slice(modelNumber + 1)];
    // Force change
    this.blocks = [...this.blocks];
  }

  drop(event) {
    moveItemInArray(this.blocks, event.previousIndex, event.currentIndex);
  }

  delete(i) {
    this.blocks.splice(i, 1);
  }

  edit(i) {

  }

  shareConfig() {

  }

  loadFromAdapter() {

  }

}
