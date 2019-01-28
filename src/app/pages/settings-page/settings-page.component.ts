import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ConfirmAppResetDialogComponent } from '../../dialogs/confirm-app-reset-dialog/confirm-app-reset-dialog.component';
import { PageTitleService } from '../../services/page-title.service';
import { AdaptersService } from '../../services/adapters.service';
import { DocumentRepositoryService } from '../../services/document-repository.service';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss']
})
export class SettingsPageComponent implements OnInit {

  constructor(
    private readonly router: Router,
    private readonly dialog: MatDialog,
    private readonly pageTitle: PageTitleService,
    private readonly adapters: AdaptersService,
    private readonly database: DocumentRepositoryService
  ) { }

  ngOnInit() {
    this.pageTitle.setTitle('App settings');
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
}
