import { Component } from '@angular/core';
import { BaseBlockComponent } from '../base-block/base-block.component';
import { Router } from '@angular/router';
import { get, isArray, isObject, isString } from 'lodash-es';
import { mappingUtility } from '../mapping-block/mapping-util';

@Component({
  selector: 'app-launch-block',
  templateUrl: './launch-block.component.html',
  styleUrls: ['./launch-block.component.scss'],
})
export class LaunchBlockComponent extends BaseBlockComponent {
  constructor(private readonly router: Router) {
    super();
  }

  onData(data: any, firstChange: boolean) {
    if (!firstChange) {
      const context = this.getMappingResult(get(this.config, 'context', {}));
      const adapter = this.valueGetter('adapter');
      const workflowId = this.valueGetter('workflowId');
      this.router.navigate([adapter, workflowId], { queryParams: context });
    }
  }

  valueGetter(key) {
    const expr = get(this.config, `valueGetters.${key}`);
    if (!expr) {
      return get(this.config, key);
    }
    return mappingUtility({ data: this.model, context: this.context }, expr);
  }

  getMappingResult(mapping) {
    if (isString(mapping)) {
      return mappingUtility(
        { data: this.model, context: this.context },
        mapping
      );
    }
    if (isArray(mapping)) {
      return mapping.map((v) => this.getMappingResult(v));
    }
    if (isObject(mapping)) {
      return Object.keys(mapping).reduce((a, key) => {
        a[key] = this.getMappingResult(mapping[key]);
        return a;
      }, {});
    }
    return mapping;
  }
}
