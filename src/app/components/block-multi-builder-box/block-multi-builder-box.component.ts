import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {clone, get} from 'lodash-es';

@Component({
  selector: 'app-block-multi-builder-box',
  templateUrl: './block-multi-builder-box.component.html',
  styleUrls: ['./block-multi-builder-box.component.scss']
})
export class BlockMultiBuilderBoxComponent implements OnInit {

  @Input() block;
  @Output() updateBlock = new EventEmitter();

  batches = [];

  constructor() { }

  ngOnInit() {
    this.batches = get(this.block, 'batches', []);
  }

  addBatch() {
    this.batches.push({ blocks: [] });
  }

  deleteBatch(i) {
    this.batches.splice(i, 1);
  }

  onBlocksUpdate(i, e) {
    this.batches[i] = { blocks: e };
    this.updateBlock.emit();
  }

  getUpdatedModel() {
    return {
      ...this.block,
      batches: clone(this.batches)
    };
  }
}
