import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ConfirmAppResetDialogComponent } from '../../dialogs/confirm-app-reset-dialog/confirm-app-reset-dialog.component';
import { PageTitleService } from '../../services/page-title.service';
import { AdaptersService } from '../../services/adapters.service';
import { DocumentRepositoryService } from '../../services/document-repository.service';
import {AppSettingsService} from '../../services/app-settings.service';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss']
})
export class SettingsPageComponent implements OnInit {

  isDebug = false;
  showHelp = true;

  constructor(
    private readonly router: Router,
    private readonly dialog: MatDialog,
    private readonly pageTitle: PageTitleService,
    private readonly adapters: AdaptersService,
    private readonly database: DocumentRepositoryService,
    private readonly settings: AppSettingsService
  ) { }

  ngOnInit() {
    this.pageTitle.setTitle('App settings');
    this.isDebug = this.settings.get('debug-mode', false);
     this.showHelp = this.settings.getTmp('showHelp', true);
  }

  resetApp() {
    const dialogRef = this.dialog.open(ConfirmAppResetDialogComponent, {
      width: '300px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.adapters.resetApp();
        this.database.resetApp();
        this.router.navigate(['/']);
      }
    });
  }

  toggleDebugMode() {
    this.isDebug = !this.isDebug;
    this.settings.set('debug-mode', this.isDebug);
  }

  toggleShowHelp() {
    this.showHelp = !this.showHelp;
    this.settings.set('showHelp', this.showHelp);
  }

}
