import { Component, OnInit } from '@angular/core';
import {WorkflowService} from '../../services/workflow.service';

@Component({
  selector: 'app-workflow-sidenav',
  templateUrl: './workflow-sidenav.component.html',
  styleUrls: ['./workflow-sidenav.component.scss']
})
export class WorkflowSidenavComponent implements OnInit {

  constructor(
    public readonly workflow: WorkflowService
  ) { }

  ngOnInit() {
  }


}
