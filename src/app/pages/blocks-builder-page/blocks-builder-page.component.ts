import {Component, OnInit} from '@angular/core';
import {clone, get, has, isArray} from 'lodash-es';
import {moveItemInArray} from '@angular/cdk/drag-drop';
import {ShareLinkGeneratorService} from '../../services/share-link-generator.service';
import {AdaptersService} from '../../services/adapters.service';
import {filter, take} from 'rxjs/operators';
import {MatDialog} from '@angular/material';
import {AdapterBlocksConfigSelectDialogComponent} from
    '../../dialogs/adapter-blocks-config-select-dialog/adapter-blocks-config-select-dialog.component';
import {ExportConfigDialogComponent} from '../../dialogs/export-config-dialog/export-config-dialog.component';
import {PasteConfigDialogComponent} from '../../dialogs/paste-config-dialog/paste-config-dialog.component';
import * as stringify from 'json-stringify-safe';
import {PageTitleService} from '../../services/page-title.service';
import {AddBlockDialogComponent} from '../../dialogs/add-block-dialog/add-block-dialog.component';

@Component({
  selector: 'app-blocks-builder-page',
  templateUrl: './blocks-builder-page.component.html',
  styleUrls: ['./blocks-builder-page.component.scss']
})
export class BlocksBuilderPageComponent implements OnInit {

  title = 'Block builder config';
  blocks = [];

  models = [];

  constructor(
    private readonly shareLinks: ShareLinkGeneratorService,
    private readonly adapters: AdaptersService,
    private readonly dialog: MatDialog,
    private readonly pageTitle: PageTitleService
  ) { }

  ngOnInit() {
    this.pageTitle.setTitle('Workflow');
    this.adapters.adaptersReady$.pipe(
      filter(Boolean),
      take(1)
    ).subscribe(() => this.initBlocks());
  }

  initBlocks() {
    const urlData = this.shareLinks.getData();
    if (urlData && isArray(urlData)) {
      this.blocks = urlData;
    }

    this.models = this.blocks.map(blockDef => get(blockDef, 'defaultValue', {}));
    this.models.push({});
  }

  drop(event) {
    moveItemInArray(this.blocks, event.previousIndex, event.currentIndex);
    this.blocks = clone(this.blocks);
  }

  clearBlocks() {
    this.blocks = [];
    this.models = [{}];
  }

  onDeleteBlock(i) {
    this.blocks.splice(i, 1);
  }

  onUpdateBlock(i, c) {
    this.blocks = [...this.blocks.slice(0, i), c.getUpdatedModel(), ...this.blocks.slice(i + 1)];
  }

  shareConfig() {
    this.shareLinks.shareLink('blocks-builder', this.blocks);
  }

  loadFromAdapter() {
    const dialogRef = this.dialog.open(AdapterBlocksConfigSelectDialogComponent, {
      data: {}
    });
    dialogRef.afterClosed().subscribe(values => {
      // console.log({ values });
      if (!!values) {
        const { title, blocks } = values;
        // TODO: refactor (a)
        this.title = title;
        this.blocks = blocks;
        this.models = this.blocks.map(blockDef => get(blockDef, 'defaultValue', {}));
        this.models.push({});
      }
    });
  }

  addBlock() {
    const dialogRef = this.dialog.open(AddBlockDialogComponent, {
      width: '460px'
    });
    dialogRef.afterClosed().subscribe(newBlock => {
      if (!!newBlock) {
        // TODO: use immutable data for efficiency/structural sharing
        this.blocks = [...this.blocks, newBlock];
      }
    });
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
            // TODO: refactor (b)
            this.title = get(config, 'title', 'Imported config');
            this.blocks = get(config, 'blocks', []);
            this.models = this.blocks.map(blockDef => get(blockDef, 'defaultValue', {}));
            this.models.push({});
          }
        } catch (e) {
          console.log('Error importing config', e);
        }
      }
    });
  }
}
