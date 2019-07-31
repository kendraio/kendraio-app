import { Component, OnInit, Inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS, MatDialog, MatDialogClose } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Animations } from 'src/app/_shared/animations';
import { AdaptersService } from 'src/app/services/adapters.service';
// import { TrustedScriptString } from '@angular/core/src/sanitization/bypass';

export interface DistributionProgress {
  name: string;
  step: number;
  percentComplete: number;
  icon: string;
  date: string;
}

export interface DialogData {
  section: 'section' | 'unicorn' | 'lion';
}

let PROGRESS_DATA: DistributionProgress[] = [
  {step: 1, name: 'Releases Selected', date: '24 Feb 2019', percentComplete: 100, icon: 'done'},
  {step: 2, name: 'Data confirmed',  date: '24 Feb 2019',  percentComplete: 100, icon: 'done'},

];

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  nextStep = false;
  displayedColumns: string[] = ['step', 'name', 'percentComplete', 'icon'];
  dataSource = [] ;
  nextDataSource = [] ;

  constructor(
    private readonly router: Router,
    private readonly adapters: AdaptersService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    PROGRESS_DATA = [
      {step: 1, name: 'Releases Selected',date: '24 Feb 2019',  percentComplete: 100, icon: 'done'},
      {step: 2, name: 'Data confirmed', date: '24 Feb 2019', percentComplete: 100, icon: 'done'},
    ];
    this.dataSource = [];
    this.nextDataSource = [];
    this.dataSource = PROGRESS_DATA;
    this.onNextStep();
  }
// Object.keys(adapters);
  get enabled() { return Object.keys(this.adapters.enabledAdapters); }

  onNextStep() {
    this.nextDataSource = [];
    this.nextDataSource = PROGRESS_DATA;
    this.enabled.forEach(input => {
      this.nextDataSource.push(  {
        step: this.nextDataSource.length + 1,
        name: 'Sent to: ' + input,
        percentComplete: this.nextDataSource.length * 3,
        date: '02 Mar 2018',
        icon: 'schedule'});
    });
    this.nextStep = true;
    this.dataSource = [];
 this.dataSource = this.nextDataSource;
  }

  openDialog(itemData: string) {
    this.dialog.open(DialogDataDialogComponent, {
      data: {
        section: itemData
      }
    });
  }

  openDialogProgress(itemData: string) {
    this.dialog.open(DialogProgressComponent, {
      height: '60%',
      width: '80%',
      data: {
        section: itemData
      }
    });
  }

}

@Component({
  templateUrl: './dialog.html',
})
export class DialogDataDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}

@Component({
  templateUrl: './dialogProgress.html',
})
export class DialogProgressComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}
