import { Injectable } from '@angular/core';
import { createSelector, Store } from '@ngrx/store';
import { AppState, getAdaptersState, getNodesState } from '../state';
import { DynamicFormService } from '@ng-dynamic-forms/core';
import { Node } from '../model/node';
import { getAdapter } from '../state/adapters/selectors';
import { Link } from '../model/link';
import { NodesState } from '../state/nodes/reducer';
import { get, isString } from 'lodash';

@Injectable()
export class KendraioFormsService {

  adapters;
  nodes = [];
  links = [];

  constructor(private forms: DynamicFormService, private store: Store<AppState>) {
    this.store.select(getAdaptersState).subscribe(({ adapters }) => {
      this.adapters = adapters;
    });
    this.store.select(getNodesState).subscribe(({ nodes, links }) => {
      this.nodes = nodes;
      this.links = links;
    });
  }

  getValidLinksForNodeType(adapterId: string, nodeType: string) {
    const adapter = this.adapters.get(adapterId);
    return get(adapter, `schemas.${nodeType}.links`, []);
  }

  getNodeFromId(id) {
    return this.nodes.find(n => n.id === id);
  }

  getNodeForm(node: Node, adapterId) {
    const adapter = this.adapters.get(adapterId);
    if (adapter && adapter.schemas && adapter.schemas[node.type]) {
      const schema = adapter.schemas[node.type];
      // console.log(schema);
      return this.forms.fromJSON([
        ...this.baseNodeFields(node),
        ...this.propertyFields(node, schema.properties),
        ...this.linkFields(node, adapter)
      ]);
    }

    return this.forms.fromJSON([]);
  }

  private baseNodeFields(node: Node) {
    return [
      {
        id: 'id',
        label: 'UUID',
        type: 'INPUT',
        disabled: true,
        value: node.id
      },
      {
        id: 'type',
        label: 'Type',
        type: 'INPUT',
        disabled: true,
        value: node.type
      }
    ];
  }

  private baseLinkFields(link: Link) {
    return [
      {
        id: 'target',
        label: 'Target',
        disabled: true,
        type: 'INPUT',
        value: link.target,
      },
      {
        id: 'type',
        label: 'Type',
        disabled: true,
        type: 'INPUT',
        value: link.type,
      }
    ];
  }

  private propertyFields(entity: Node | Link, properties) {
    return Object.keys(properties).map(id => ({
      id,
      label: (properties[id].options && properties[id].options.label) ? properties[id].options.label : id,
      type: (properties[id].options && properties[id].options.fieldType) ? properties[id].options.fieldType : 'INPUT',
      value: isString(entity[id])
        ? entity[id]
        : entity[id] && entity[id]['_UserDefinedValue'] && isString(entity[id]['_UserDefinedValue'])
          ? entity[id]['_UserDefinedValue']
          : ''
    }));

    // return [
    //   {
    //     id: 'properties',
    //     legend: 'properties',
    //     type: 'GROUP',
    //     group: Object.keys(properties).map(id => ({
    //       id,
    //       label: (properties[id].options && properties[id].options.label) ? properties[id].options.label : id,
    //       type: (properties[id].options && properties[id].options.fieldType) ? 'TEXTAREA' : 'INPUT',
    //       value: entity[id]
    //     }))
    //   }
    // ];
  }

  private linkFields(node, adapter) {
    const links = this.links.filter(l => l.source === node.id);
    return [
      {
        type: 'ARRAY',
        id: 'links',
        initialCount: links.length,
        groups: links.map(l => {
          if (adapter.schemas && adapter.schemas[l.type] && adapter.schemas[l.type].properties) {
            return {
              group: [
                ...this.baseLinkFields(l),
                ...this.propertyFields(l, adapter.schemas[l.type].properties)
              ]
            };
          }
          return {
            group: [
              ...this.baseLinkFields(l)
            ]
          };
        }),
        groupPrototype: [
          {
            id: 'target',
            label: 'Target',
            type: 'INPUT'
          }
        ]
      }
    ];
  }

  createFormGroup(formModel) {
    return this.forms.createFormGroup(formModel);
  }

}