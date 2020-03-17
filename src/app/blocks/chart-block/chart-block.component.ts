import {AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {clone, get, isArray, isObject} from 'lodash-es';
import * as Chart from 'chart.js';
import {BehaviorSubject, combineLatest, Subject} from 'rxjs';
import {filter, map, takeUntil, tap} from 'rxjs/operators';

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

  @ViewChild('chart', { static: false }) chartElement: ElementRef;
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
    const data = isArray(this.model) ? this.model : get(this.model, 'result', []);
    this._chart.data.labels = data.map(({ label }) => label);
    this._chart.data.datasets = [
      { data: data.map(({ value }) => value) }
    ];
    this._chart.update();
  }
}
