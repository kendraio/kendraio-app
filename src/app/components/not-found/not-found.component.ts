import {Component, OnDestroy, OnInit} from '@angular/core';
import {PageTitleService} from '../../services/page-title.service';
import {ActivatedRoute} from '@angular/router';
import {WorkflowRepoService} from '../../services/workflow-repo.service';
import {catchError, filter, map, switchMap, switchMapTo, takeUntil, tap, withLatestFrom} from 'rxjs/operators';
import {get, isArray, set} from 'lodash-es';
import {BehaviorSubject, combineLatest, of, Subject} from 'rxjs';
import {WorkflowService} from '../../services/workflow.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit, OnDestroy {

  isLoaded = false;

  destroy$ = new Subject();
  refresh$;

  constructor(
    public readonly workflow: WorkflowService,
    private readonly pageTitle: PageTitleService,
    private readonly route: ActivatedRoute,
    private readonly workflowRepo: WorkflowRepoService
  ) {
    this.refresh$ = this.pageTitle.refresh$;
  }

  ngOnInit() {
    combineLatest([this.route.url, this.refresh$])
      .pipe(
        takeUntil(this.destroy$),
        map(([x]) => x),
        map(v => (isArray(v) && v.length === 0) ? [{path: 'core'}, {path: 'dashboard'}] : v),
        map(v => (isArray(v) && v.length === 1 && v[0].path && v[0].path === 'dashboard') ? [{path: 'core'}, {path: 'dashboard'}] : v),
        filter(v => isArray(v) && v.length >= 2),
        withLatestFrom(this.route.queryParams),
        switchMap(([[adapterName, workflowId], queryParams]: any) => this.workflowRepo.getBlocks(adapterName.path, workflowId.path)
          .pipe(
            withLatestFrom(this.route.fragment),
            map(([blocks, fragment]) => ({ ...blocks, queryParams, fragment }))
          )),
        catchError(err => {
          console.error(err);
          return of({
            blocks: [
              {
                type: 'message',
                title: 'Error loading workflow',
                message: err.message
              }
            ],
            title: 'Not found',
            context: {}
          });
        }),
      )
      .subscribe(({ blocks, title, context, queryParams, fragment }) => {
        this.workflow.initWorkflow({ title, blocks, context: { ...context, queryParams, fragment }});
        this.isLoaded = true;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
