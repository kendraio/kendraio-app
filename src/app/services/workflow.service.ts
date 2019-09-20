import { Injectable } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';
import {ExportConfigDialogComponent} from '../dialogs/export-config-dialog/export-config-dialog.component';
import * as stringify from 'json-stringify-safe';
import {PasteConfigDialogComponent} from '../dialogs/paste-config-dialog/paste-config-dialog.component';
import {clone, get, has, isArray, set} from 'lodash-es';
import {MatDialog} from '@angular/material';
import {PageTitleService} from './page-title.service';
import {AdaptersService} from './adapters.service';
import {AdapterBlocksConfigSelectDialogComponent} from '../dialogs/adapter-blocks-config-select-dialog/adapter-blocks-config-select-dialog.component';
import {ShareLinkGeneratorService} from './share-link-generator.service';

@Injectable({
  providedIn: 'root'
})
export class WorkflowService {

  title = '';
  blocks = [];
  models = [];
  context = {};

  constructor(
    private readonly router: Router,
    private readonly dialog: MatDialog,
    private readonly pageTitle: PageTitleService,
    private readonly adapters: AdaptersService,
    private readonly shareLinks: ShareLinkGeneratorService
  ) {
    this.router.events
      .pipe(
        filter((e): e is NavigationEnd => e instanceof NavigationEnd),
      )
      .subscribe(_ => this.loadState());
  }

  initBlocks({ isBuilder }) {
    const urlData = this.shareLinks.getData();
    if (urlData && isArray(urlData)) {
      this.blocks = urlData;
      this.initWorkflow({ title: 'Workflow', blocks: urlData, context: {} }, true);
    }
  }

  loadState() {
    const state = JSON.parse(localStorage.getItem('kendraio-workflow-state'));
    const title = get(state, 'title', 'Workflow');
    const blocks = get(state, 'blocks', []);
    const context = get(state, 'context', {});
    this.initWorkflow({ title, blocks, context });
  }

  saveState() {
    const { title, blocks, context } = this;
    localStorage.setItem('kendraio-workflow-state', JSON.stringify({ title, blocks, context }));
  }

  refresh() {
    // TODO: disabled this as was triggering a full workflow re-load
    // this.pageTitle.onRefresh();
    // ... when this refresh call should just re-init the running workflow
    this.models = this.blocks.map(blockDef => get(blockDef, 'defaultValue', {}));
    this.models.push({});
    // TODO: this is a partial refresh of context data, but needs refactoring
    set(this.context, 'adapters', this.adapters.getAdaptersInfo());
  }

  onBlocksUpdate(newBlocks) {
    this.blocks = newBlocks;
    this.models = [{}];
    this.saveState();
  }

  clearBlocks() {
    this.blocks = [];
    this.saveState();
  }

  copyConfig() {
    const dialogRef = this.dialog.open(ExportConfigDialogComponent, {
      data: {
        configText: stringify({ title: this.title, blocks: this.blocks })
      }
    });
  }

  pasteConfig() {
    const dialogRef = this.dialog.open(PasteConfigDialogComponent, {});
    dialogRef.afterClosed().subscribe(value => {
      if (!!value) {
        try {
          const config = JSON.parse(value);
          if (has(config, 'blocks')) {
            this.initWorkflow({
              title: get(config, 'title', 'Imported config'),
              blocks: get(config, 'blocks', []),
              context: {}
            });
          }
        } catch (e) {
          console.log('Error importing config', e);
        }
      }
    });
  }

  initWorkflow({ title, blocks, context }, isBuilder = false) {
    this.pageTitle.setTitle(title, true);
    this.title = title;
    this.blocks = blocks;
    this.context = clone(context);
    this.models = this.blocks.map(blockDef => get(blockDef, 'defaultValue', {}));
    this.models.push({});
    if (isBuilder) {
      this.saveState();
    }
  }

  shareConfig() {
    this.shareLinks.shareLink('workflow-builder', this.blocks);
  }

  loadFromAdapter() {
    const dialogRef = this.dialog.open(AdapterBlocksConfigSelectDialogComponent, {
      data: {}
    });
    dialogRef.afterClosed().subscribe(values => {
      if (!!values) {
        this.initWorkflow({ ...values, context: {} });
      }
    });
  }

  upload() {

  }

  download() {

  }
}
