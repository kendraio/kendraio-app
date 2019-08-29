import {Component, OnInit} from '@angular/core';
import {get, isArray} from 'lodash-es';
import {moveItemInArray} from '@angular/cdk/drag-drop';
import {ShareLinkGeneratorService} from '../../services/share-link-generator.service';

@Component({
  selector: 'app-blocks-builder-page',
  templateUrl: './blocks-builder-page.component.html',
  styleUrls: ['./blocks-builder-page.component.scss']
})
export class BlocksBuilderPageComponent implements OnInit {

  blocks = [];

  models = [];

  constructor(
    private shareLinks: ShareLinkGeneratorService
  ) { }

  ngOnInit() {
    const urlData = this.shareLinks.getData();
    if (urlData && isArray(urlData)) {
      this.blocks = urlData;
    }

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

  onDeleteBlock(i) {
    this.blocks.splice(i, 1);
  }

  onUpdateBlock(i, event) {
    console.log(`Update block ${i}`, event);
    this.blocks = [...this.blocks.slice(0, i), event, ...this.blocks.slice(i + 1)];
  }

  shareConfig() {
    this.shareLinks.shareLink('blocks-builder', this.blocks);
  }

  loadFromAdapter() {

  }

  addBlock() {
    this.blocks.push({ type: 'debug' });
  }

}
