import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import * as Chart from 'chart.js';
import { get } from 'lodash-es';

@Component({
  selector: 'app-data-chart-output',
  templateUrl: './data-chart-output.component.html',
  styleUrls: ['./data-chart-output.component.scss'],
})
export class DataChartOutputComponent
  implements OnInit, AfterViewInit, OnChanges
{
  @Input() data;
  @Input() config;
  @ViewChild('chart') chart: ElementRef;
  _chart;
  isInit = false;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    // console.log({ data: this.data });
    this.isInit = true;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.isInit) {
      const data = get(changes, 'data.currentValue', []) as Array<any>;
      this._chart = new Chart(this.chart.nativeElement, {
        type: 'doughnut',
        data: {
          datasets: [{ data: data.map(({ value }) => value) }],
          labels: data.map(({ label }) => label),
        },
      });
    }
  }
}
