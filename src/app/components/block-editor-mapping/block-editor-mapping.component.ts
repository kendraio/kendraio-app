import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {clone, set} from 'lodash-es';

@Component({
  selector: 'app-block-editor-mapping',
  templateUrl: './block-editor-mapping.component.html',
  styleUrls: ['./block-editor-mapping.component.scss']
})
export class BlockEditorMappingComponent implements OnInit {

  @Input() block;
  @Output() blockUpdated = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onMappingUpdate(value) {
    set(this.block, `mapping`, value);
    this.blockUpdated.emit(clone(this.block));
  }
}


