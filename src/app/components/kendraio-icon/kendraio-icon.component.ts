import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-kendraio-icon',
  templateUrl: './kendraio-icon.component.html',
  styleUrls: ['./kendraio-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KendraioIconComponent implements OnInit {

  @Input() icon: string;
  @Input() color;

  get isFontAwesome() {
    return this.icon.startsWith('fa-');
  }

  constructor() { }

  ngOnInit() {
  }

}
