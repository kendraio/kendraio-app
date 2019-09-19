import { Injectable } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';
import {ExportConfigDialogComponent} from '../dialogs/export-config-dialog/export-config-dialog.component';
import * as stringify from 'json-stringify-safe';
import {PasteConfigDialogComponent} from '../dialogs/paste-config-dialog/paste-config-dialog.component';
import {clone, get, has, set} from 'lodash-es';
import {MatDialog} from '@angular/material';
import {PageTitleService} from './page-title.service';
import {AdaptersService} from './adapters.service';

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
    private readonly adapters: AdaptersService
  ) {
    this.router.events
      .pipe(
        filter((e): e is NavigationEnd => e instanceof NavigationEnd),
      )
      .subscribe(_ => this.blocks = []);
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
  }

  clearBlocks() {
    this.blocks = [];
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

  initWorkflow({ title, blocks, context }) {
    this.pageTitle.setTitle(title, true);
    this.title = title;
    this.blocks = blocks;
    this.context = clone(context);
    this.models = this.blocks.map(blockDef => get(blockDef, 'defaultValue', {}));
    this.models.push({});
  }
}
