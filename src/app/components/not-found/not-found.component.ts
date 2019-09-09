import { Component, OnInit } from '@angular/core';
import {PageTitleService} from '../../services/page-title.service';
import {ActivatedRoute} from '@angular/router';
import {WorkflowRepoService} from '../../services/workflow-repo.service';
import {filter, switchMap, switchMapTo, tap} from 'rxjs/operators';
import {get, isArray} from 'lodash-es';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  isLoading = true;
  hasBlocks = false;

  blocks = [];
  models = [];

  constructor(
    private readonly pageTitle: PageTitleService,
    private readonly route: ActivatedRoute,
    private readonly workflowRepo: WorkflowRepoService
  ) { }

  ngOnInit() {
    this.route.url
      .pipe(
        filter(v => isArray(v) && v.length >= 2),
        switchMap(([adapterName, workflowId]) => this.workflowRepo.getBlocks(adapterName.path, workflowId.path))
      )
      .subscribe(({ blocks, title }) => {
        // TODO: refactor (e)
        this.pageTitle.setTitle(title);
        this.blocks = blocks;
        this.models = this.blocks.map(blockDef => get(blockDef, 'defaultValue', {}));
        this.models.push({});
        this.isLoading = false;
        this.hasBlocks = true;
      });
  }

}
