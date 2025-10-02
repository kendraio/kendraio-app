import {Component, EventEmitter, HostBinding, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {WorkflowService} from '../../services/workflow.service';
import {BuildInfoService} from '../../services/build-info.service';

@Component({
  selector: 'app-workflow-sidenav',
  templateUrl: './workflow-sidenav.component.html',
  styleUrls: ['./workflow-sidenav.component.scss']
})
export class WorkflowSidenavComponent implements OnInit {

  @Output() closeSidenav = new EventEmitter();

  @HostBinding('style.width.px')
  width = 500;

  isExpanded = false;

  readonly buildDate$: Observable<Date | null>;

  constructor(
    public readonly workflow: WorkflowService,
    private readonly buildInfo: BuildInfoService
  ) {
    this.buildDate$ = this.buildInfo.buildDate$;
  }

  ngOnInit() {
  }

  toggleExpand() {
    this.isExpanded = !this.isExpanded;
    this.width = this.isExpanded ? 800 : 500;
  }

  async clearServiceWorkerCaches(): Promise<void> {
    if (typeof window === 'undefined') {
      return;
    }

    if ('serviceWorker' in navigator) {
      const registrations = await navigator.serviceWorker.getRegistrations();
      await Promise.all(registrations.map((registration) => registration.unregister()));
    }

    if ('caches' in window) {
      const cacheKeys = await caches.keys();
      await Promise.all(cacheKeys.map((cacheKey) => caches.delete(cacheKey)));
    }

    window.location.reload();
  }

}
