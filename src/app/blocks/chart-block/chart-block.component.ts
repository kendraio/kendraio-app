import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart-block',
  templateUrl: './chart-block.component.html',
  styleUrls: ['./chart-block.component.scss']
})
export class ChartBlockComponent implements OnInit {

  rowData = [];
  outputConfig = {};

  constructor() { }

  ngOnInit() {
  }

}
