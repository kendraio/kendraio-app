import {
  Component,
  EventEmitter,
  Input,
  NgZone,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { clone } from 'lodash-es';

// TODO: deprecate init block and replace with option on the workflow

@Component({
  selector: 'app-init-block',
  templateUrl: './init-block.component.html',
  styleUrls: ['./init-block.component.scss'],
})
export class InitBlockComponent implements OnInit, OnChanges {
  @Input() config;
  @Input() context;
  @Input() model: any = {};

  @Output() output = new EventEmitter();

  constructor(private readonly zone: NgZone) {}

  ngOnInit() {
    // this.updateOutputDisplay();
  }

  ngOnChanges(changes) {
    setTimeout(() => {
      this.zone.run(() => {
        this.output.emit(clone(this.model));
      });
    }, 0);
  }
}
