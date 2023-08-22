import { Injectable } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {filter, take, tap, withLatestFrom} from 'rxjs/operators';
import {ExportConfigDialogComponent} from '../dialogs/export-config-dialog/export-config-dialog.component';
import * as stringify from 'json-stringify-safe';
import {PasteConfigDialogComponent} from '../dialogs/paste-config-dialog/paste-config-dialog.component';
import {clone, findIndex, get, has, isArray, pick, set} from 'lodash-es';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';
import {PageTitleService} from './page-title.service';
import {AdaptersService} from './adapters.service';
// tslint:disable-next-line:import-spacing
import {AdapterBlocksConfigSelectDialogComponent} from
    '../dialogs/adapter-blocks-config-select-dialog/adapter-blocks-config-select-dialog.component';
import {ShareLinkGeneratorService} from './share-link-generator.service';
import {LoadWorkflowDialogComponent} from '../dialogs/load-workflow-dialog/load-workflow-dialog.component';
import {SaveWorkflowDialogComponent} from '../dialogs/save-workflow-dialog/save-workflow-dialog.component';
import {EditWorkflowMetadataDialogComponent} from '../dialogs/edit-workflow-metadata-dialog/edit-workflow-metadata-dialog.component';
import {LocalDatabaseService} from './local-database.service';
import { camelCase } from 'lodash-es';
import {ConnectionManagerService} from './connection-manager.service';
import {WorkflowRepoService} from './workflow-repo.service';

const DEFAULT_ADAPTER_NAME = 'Adapter name';

@Injectable({
  providedIn: 'root'
})
export class WorkflowService {

  title = '';
  id;
  blocks = [];
  models = [];
  context = {};
  tags = [];

  dirty:boolean = false; // has this workflow been modified since last load/save?

  constructor(
    private readonly router: Router,
    private readonly dialog: MatDialog,
    private readonly pageTitle: PageTitleService,
    private readonly adapters: AdaptersService,
    private readonly shareLinks: ShareLinkGeneratorService,
    private readonly localData: LocalDatabaseService,
    private readonly notify: MatSnackBar,
    private readonly connectionManager: ConnectionManagerService,
    private readonly workflowRepo: WorkflowRepoService,
  ) {
    this.router.events
      .pipe(
        filter((e): e is NavigationEnd => e instanceof NavigationEnd),
        filter(({ url }) => url === '/workflow-builder')
      )
      .subscribe(_ => this.loadState());
  }

  initBlocks({ isBuilder }) {
    const urlData = this.shareLinks.getData();
    if (urlData && isArray(urlData)) {
      this.blocks = urlData;
      this.initWorkflow({ title: 'Flow name', blocks: urlData, context: {}, tags: [] }, true);
    }
  }

  loadState() {
    const state = JSON.parse(localStorage.getItem('kendraio-workflow-state'));
    const title = get(state, 'title', 'Flow name');
    const blocks = get(state, 'blocks', []);
    const context = get(state, 'context', {});
    const tags = get(state, 'tags', []);
    this.initWorkflow({ title, blocks, context, tags });
    this.id = get(state, 'id', false);
    set(this.context, 'app.adapterName', get(state, 'adapterName', this.getAdapterName()));
  }

  saveState() {
    const { title, blocks, context, id } = this;
    const adapterName = this.getAdapterName();
    this.workflowRepo.clearCacheFor(adapterName, id);
    localStorage.setItem('kendraio-workflow-state', JSON.stringify({ title, blocks, context, id, adapterName }));
  }

  refresh() {
    // TODO: disabled this as was triggering a full workflow re-load
    // this.pageTitle.onRefresh();
    // ... when this refresh call should just re-init the running workflow
    this.models = this.blocks.map(blockDef => get(blockDef, 'defaultValue', {}));
    this.models.push({});
    // TODO: this is a partial refresh of context data, but needs refactoring
    // set(this.context, 'adapters', this.adapters.getAdaptersInfo());
  }

  onBlocksUpdate(newBlocks) {
    this.dirty = true;
    this.blocks = newBlocks;
    // this.models = [{}];
    this.saveState();
  }

  clearBlocks() {
    this.blocks = [];
    this.id = '';
    this.title = 'Flow';
    set(this.context, 'app.adapterName', undefined);
    this.saveState();
    this.router.navigate(['/workflow-builder']);
  }

  clearWorkflowData() {
    this.models = this.blocks.map(blockDef => get(blockDef, 'defaultValue', {}));
    this.models.push({});
  }

  copyConfig() {
    const dialogRef = this.dialog.open(ExportConfigDialogComponent, {
      data: {
        configText: stringify({ title: this.title, blocks: this.blocks, id: this.id, adapterName: this.getAdapterName() }, null, 2)
      }
    });
  }

  pasteConfig() {
    const dialogRef = this.dialog.open(PasteConfigDialogComponent, {});
    dialogRef.afterClosed().subscribe(value => {
      if (!!value) {
        this.router.navigate(['/workflow-builder']).then(() => {
          try {
            const config = JSON.parse(value);
            if (has(config, 'blocks')) {
              this.router.routerState.root.queryParams.pipe(
                take(1),
                withLatestFrom(this.router.routerState.root.fragment)
              ).subscribe(([queryParams, fragment]) => {
                this.initWorkflow({
                  title: get(config, 'title', 'Imported config'),
                  blocks: get(config, 'blocks', []),
                  context: {queryParams, fragment},
                  tags: get(config, 'tags', [])
                });
                this.id = get(config, 'id');
                set(this.context, 'app.adapterName', get(config, 'adapterName', DEFAULT_ADAPTER_NAME));
                this.saveState();
              });
            }
          } catch (e) {
            console.log('Error importing config', e);
          }
        });
      }
    });
  }

  initWorkflow({ title, blocks, context, tags }, isBuilder = false) {
    this.dirty = false;
    this.pageTitle.setTitle(title, true);
    this.title = title;
    this.blocks = blocks;
    this.tags = tags || [];
    this.context = clone(context);
    set(this.context, 'app.location', pick(location, ['origin', 'protocol', 'host', 'port', 'pathname', 'search', 'hash', 'href']));
    this.connectionManager.addToContext(this.context);
    this.id = this.getWorkflowId();
    this.models = this.blocks.map(blockDef => get(blockDef, 'defaultValue', {}));
    this.models.push({});
    if (isBuilder) {
      this.saveState();
    }
    if (this.tags.includes('app')) {
      this.pageTitle.enableAppLayout();
    } else {
      this.pageTitle.disableAppLayout();
    }
  }

  shareConfig() {
    this.shareLinks.shareFlowLink('workflow-builder', this.blocks);
  }

  loadFromAdapter() {
    const dialogRef = this.dialog.open(AdapterBlocksConfigSelectDialogComponent, {
      data: {}
    });
    dialogRef.afterClosed().subscribe(values => {
      if (!!values) {
        this.initWorkflow({ ...values, context: {} });
        set(this.context, 'app.adapterName', get(values, 'adapterName', this.getAdapterName()));
      }
    });
  }

  saveToAdapter() {
    this.localData['workflows']
      .where('[adapterName+workflowId]')
      .equals([this.getAdapterName() || DEFAULT_ADAPTER_NAME, this.id])
      .modify({ blocks: this.blocks, title: this.title, workflowId: this.id, modified: true })
      .then(() => {
        this.localData['adapters'].get(this.getAdapterName()).then(adapter => {
          const workflow = get(adapter, 'workflow', []);
          const workflowIndex = findIndex(workflow, ({ workflowId }) => workflowId === this.id);
          if (workflowIndex !== -1) {
            workflow[workflowIndex] = { ...workflow[workflowIndex], title: this.title, modified: true };
          }
          this.localData['adapters'].update(this.getAdapterName(), { ...adapter, workflow, modified: true }).then(() => {
            this.notify.open('Saved workflow', 'OK', { verticalPosition: 'top', horizontalPosition: 'center', duration: 2000 });
          });
        });
      })
      .catch(error => console.log({ error }));
  }

  upload() {
    const { title, blocks, id, tags } = this;
    const dialogRef = this.dialog.open(SaveWorkflowDialogComponent, {
      disableClose: true,
      data: { title, blocks, id: camelCase(id), adapterName: this.getAdapterName(), tags }
    });
    dialogRef.afterClosed().subscribe(values => {
      if (!!values) {
        // console.log(values);
        this.id = get(values, 'id', this.id);
        this.saveState();
        this.dirty = false;
      }
    });
  }

  download() {
    const dialogRef = this.dialog.open(LoadWorkflowDialogComponent);
    dialogRef.afterClosed().subscribe(values => {
      if (!!values) {
        // console.log(values);
        const blocks = get(values, 'blocks', []);
        const tags = get(values, 'tags', []);
        const title = get(values, 'title', 'Flow');
        this.initWorkflow({ title, blocks, context: {}, tags });
        this.id = get(values, 'id');
        this.tags = get(values, 'tags', []);
        set(this.context, 'app.adapterName', get(values, 'adapterName', this.getAdapterName()));
        this.saveState();
      }
    });
  }

  editMetadata() {
    const { title, id, tags } = this;
    const dialogRef = this.dialog.open(EditWorkflowMetadataDialogComponent, {
      disableClose: true,
      data: { title, id, adapterName: this.getAdapterName(), tags }
    });
    dialogRef.afterClosed().subscribe(values => {
      if (!!values) {
        this.title = get(values, 'title', 'Flow');
        this.id = get(values, 'id');
        this.tags = get(values, 'tags');
        set(this.context, 'app.adapterName', get(values, 'adapterName', this.getAdapterName()));
        this.saveState();
        this.dirty = true;
      }
    });
  }

  getAdapterName() {
    return get(this.context, 'app.adapterName', 'Adapter name');
  }

  getWorkflowId() {
    return get(this.context, 'app.workflowId');
  }
}
