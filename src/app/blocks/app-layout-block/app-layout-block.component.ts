import { Component } from '@angular/core';
import { BaseBlockComponent } from '../base-block/base-block.component';
import { get } from 'lodash-es';

@Component({
  selector: 'app-app-layout-block',
  templateUrl: './app-layout-block.component.html',
  styleUrls: ['./app-layout-block.component.scss'],
})
export class AppLayoutBlockComponent extends BaseBlockComponent {
  tabs = [];
  activeTabBlocks = [];
  models = [];

  onConfigUpdate(config: any) {
    this.tabs = get(config, 'tabs', []);
    if (this.activeTabBlocks.length === 0) {
      if (this.tabs.length > 0) {
        this.setTab(0);
      }
    }
  }

  setTab(i) {
    this.activeTabBlocks = this.tabs[i].blocks || [];
    this.models = this.activeTabBlocks.map((blockDef) =>
      get(blockDef, 'defaultValue', {})
    );
  }
}
