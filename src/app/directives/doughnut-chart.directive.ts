import { AfterViewInit, Directive, ElementRef, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import Chart from 'chart.js';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Directive({
  selector: '[appDoughnutChart]'
})
export class DoughnutChartDirective implements AfterViewInit, OnChanges, OnDestroy {

  destroy$ = new Subject();

  @Input('appDoughnutChart') data$;
  _data;

  chart;

  constructor(
    private readonly el: ElementRef
  ) { }

  ngAfterViewInit(): void {
    this.chart = new Chart(this.el.nativeElement, {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [],
          backgroundColor: ['#a2708c', '#d5e26c', '#b95ea9', '#adcbe8', 'green', 'purple']
        }],
        labels: []
      },
      options: {
        animation: {
          animateRotate: false
        }
      }
    });
    this.data$.pipe(
      takeUntil(this.destroy$),
      // map(this.chartData), 
      // tap(console.log)
    ).subscribe(d => {
      this.chart.data.datasets[0].data = d.datasets[0].data;
      this.chart.data.labels = d.labels;
      this.chart.update();
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  chartData(clips) {
    return {
      datasets: [{
        data: clips.map(({ start, end }) => end - start),
        backgroundColor: ['red', 'yellow', 'pink', 'blue', 'green', 'purple']
      }],
      labels: clips.map(({ name }) => name)
    };
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
