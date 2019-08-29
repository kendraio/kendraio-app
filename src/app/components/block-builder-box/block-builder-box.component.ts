import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-block-builder-box',
  templateUrl: './block-builder-box.component.html',
  styleUrls: ['./block-builder-box.component.scss']
})
export class BlockBuilderBoxComponent implements OnInit {

  @Input() block;
  showEditor = false;
  @Output() deleteBlock = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  toggleEdit() {
    this.showEditor = !this.showEditor;
  }

  onDelete() {
    this.deleteBlock.emit();
  }
}
