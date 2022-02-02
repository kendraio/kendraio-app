import {Component, OnDestroy, OnInit} from '@angular/core';
import {PageTitleService} from '../../services/page-title.service';
import {ActivatedRoute} from '@angular/router';
import {WorkflowRepoService} from '../../services/workflow-repo.service';
import {catchError, filter, map, switchMap, switchMapTo, takeUntil, tap, withLatestFrom} from 'rxjs/operators';
import {get, isArray, set} from 'lodash-es';
import {BehaviorSubject, combineLatest, of, Subject} from 'rxjs';
import {WorkflowService} from '../../services/workflow.service';
import { Observable } from 'rxjs';
import { DirtyDialogService } from 'src/app/services/dirty-dialog.service';
import { CanComponentDeactivate } from 'src/app/auth/dirty.guard';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit, OnDestroy, CanComponentDeactivate {

  isLoaded = false;

  destroy$ = new Subject();
  refresh$;
  

  constructor(
    public readonly workflow: WorkflowService,
    private readonly pageTitle: PageTitleService,
    private readonly route: ActivatedRoute,
    private readonly workflowRepo: WorkflowRepoService,
    private dirtyDialog: DirtyDialogService
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
      .subscribe(({ blocks, title, context, tags, queryParams, fragment }) => {
        this.workflow.initWorkflow({ title, blocks, tags, context: { ...context, queryParams, fragment }});
        this.isLoaded = true;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
  
  /**
   * Prevents navigation away from the component if changes have been made
   * @returns true if the component can be deactivated
   */
  canDeactivate(): Observable<boolean> | boolean {    
    console.log("this.workflow.Dirty", this.workflow.dirty);
    if (!this.workflow.dirty) {
      return true;
    }
    // Otherwise ask the user with the dialog service and return its
    // observable which resolves to true or false when the user decides
    return this.dirtyDialog.confirm('Discard changes?');
  }

}
