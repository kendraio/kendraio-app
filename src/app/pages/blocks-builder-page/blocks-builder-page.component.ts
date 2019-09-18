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
import {WorkflowService} from '../../services/workflow.service';

@Component({
  selector: 'app-blocks-builder-page',
  templateUrl: './blocks-builder-page.component.html',
  styleUrls: ['./blocks-builder-page.component.scss']
})
export class BlocksBuilderPageComponent implements OnInit {

  constructor(
    public readonly workflow: WorkflowService,
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
      this.workflow.blocks = urlData;
    }

    this.workflow.models = this.workflow.blocks.map(blockDef => get(blockDef, 'defaultValue', {}));
    this.workflow.models.push({});
  }

  onBlocksUpdate(newBlocks) {
    this.workflow.blocks = newBlocks;
  }

  clearBlocks() {
    this.workflow.blocks = [];
    this.workflow.models = [{}];
  }


  shareConfig() {
    this.shareLinks.shareLink('workflow-builder', this.workflow.blocks);
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
        this.workflow.title = title;
        this.workflow.blocks = blocks;
        this.workflow.models = this.workflow.blocks.map(blockDef => get(blockDef, 'defaultValue', {}));
        this.workflow.models.push({});
      }
    });
  }

}
