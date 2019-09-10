import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-switch-block',
  templateUrl: './switch-block.component.html',
  styleUrls: ['./switch-block.component.scss']
})
export class SwitchBlockComponent implements OnInit {

  @Input() config;
  @Input() context;
  @Input() model: any = {};

  @Output() output = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
