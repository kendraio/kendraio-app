import {AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {clone, cloneDeep, get, isArray, isObject, isString} from 'lodash-es';
import Chart from 'chart.js';
import {BehaviorSubject, combineLatest, Subject} from 'rxjs';
import {filter, map, takeUntil, tap} from 'rxjs/operators';
import {mappingUtility} from '../mapping-block/mapping-util';

const CAT10 = ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd', '#8c564b', '#e377c2', '#7f7f7f', '#bcbd22', '#17becf'];
const CAT10a = CAT10.map(hex => {
  const r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},0.1)`;
});

@Component({
  selector: 'app-chart-block',
  templateUrl: './chart-block.component.html',
  styleUrls: ['./chart-block.component.scss']
})
export class ChartBlockComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  rowData = [];
  outputConfig = {};

  @Input() config;
  @Input() context;
  @Input() model: any = {};
  @Output() output = new EventEmitter();
  multi = false;

  @ViewChild('chart') chartElement: ElementRef;
  _chart;

  _destroy$ = new Subject();
  _dataUpdates$ = new BehaviorSubject({});
  _viewUpdates$ = new BehaviorSubject(false);
  chartUpdates$ = combineLatest([this._dataUpdates$, this._viewUpdates$])
    .pipe(
      takeUntil(this._destroy$),
      filter(([_, isViewInitialised]) => isViewInitialised)
    );

  constructor() { }

  ngOnInit() {
    this.chartUpdates$.subscribe(() => {
      this.updateOutputDisplay();
    });
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
    if (this._chart) {
      this._chart.destroy();
    }
  }

  ngAfterViewInit() {
    this.initChartType();
    this._viewUpdates$.next(true);
  }

  ngOnChanges(changes) {
    this._dataUpdates$.next({});
    this.output.emit(clone(this.model));
    this.multi = get(this.config, 'multi', false);
  }

  initChartType() {
    const chartType = get(this.config, 'chartType', 'doughnut');
    if (!this._chart || chartType !== this._chart.type) {
      if (this._chart) {
        this._chart.destroy();
      }
      this._chart = new Chart(this.chartElement.nativeElement, { type: chartType });
    }
  }

  updateOutputDisplay() {
    this.initChartType();
    if (this.multi && isArray(this.model) && this.model.length > 0) {
      if (this.model.map(_set => !!_set.data).includes(false)) {
        return;
      }
      this._chart.data.labels = this.model[0].data.map(({ label }) => label);
      this._chart.data.datasets = this.model.map((_data, i) => (
        {
          borderColor: CAT10[i % 10],
          backgroundColor: CAT10a[i % 10],
          label: _data.label,
          data: _data.data.map(({ value }) => value)
        }
      ));
      const customOptions = cloneDeep(get(this.config, 'options', {}));
      ['xAxes', 'yAxes'].forEach(axisType => {
        if (customOptions.scales && customOptions.scales[axisType]) {
          customOptions.scales[axisType].forEach(axes => {
            if (axes.ticks && isString(axes.ticks.callback)) {
              const expr = axes.ticks.callback as string;
              axes.ticks.callback = function (value, index, values) {
                return mappingUtility({ value, index, values }, expr);
              };
            }
          });
        }
      });
      this._chart.options = customOptions;
      this._chart.update();
      return;
    }
    const data = isArray(this.model) ? this.model : get(this.model, 'result', []);
    this._chart.data.labels = data.map(({ label }) => label);
    this._chart.data.datasets = [
      {
        data: data.map(({ value }) => value),
        backgroundColor: data.map((_v, i) => CAT10[i % 10])
      }
    ];
    this._chart.update();
  }
}
