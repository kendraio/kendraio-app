import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-api-data-select-dialog',
  templateUrl: './api-data-select-dialog.component.html',
  styleUrls: ['./api-data-select-dialog.component.scss']
})
export class ApiDataSelectDialogComponent implements OnInit {

  APIs = [
    'http://localhost:3000/soundRecording',
    'http://localhost:3000/musicalWork',
  ];

  dataList = [];

  selectedApi;
  selectedData;

  constructor(
    private readonly http: HttpClient,
    public dialogRef: MatDialogRef<ApiDataSelectDialogComponent>
  ) { }

  ngOnInit() {
  }

  getList() {
    this.http.get<Array<any>>(this.selectedApi).subscribe(value => {
      this.dataList = value;
    });
  }

  loadData() {
    this.dialogRef.close({
      endpoint: this.selectedApi,
      values: this.dataList[this.selectedData]
    });
  }

  cancel() {
    this.dialogRef.close(false);
  }

}
