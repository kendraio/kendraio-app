import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-clip-list',
  templateUrl: './clip-list.component.html',
  styleUrls: ['./clip-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ClipListComponent implements OnInit {

  @Input() clips;

  constructor() { }

  ngOnInit() {
  }

  get clipKeys() {
    return this.clips ? Object.keys(this.clips) : [];
  }

  trackByFn(index, item) {
    console.log({ index, item });
    return item; // or item.id
  }
}
