import {Component, OnInit} from '@angular/core';
import {ShareLinkGeneratorService} from '../../services/share-link-generator.service';
import {AdaptersService} from '../../services/adapters.service';
import {filter, take} from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import {PageTitleService} from '../../services/page-title.service';
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
    this.pageTitle.setTitle('Flow', true);
    this.adapters.adaptersReady$.pipe(
      filter(Boolean),
      take(1)
    ).subscribe(() => this.workflow.initBlocks({ isBuilder: true }));
  }


}
