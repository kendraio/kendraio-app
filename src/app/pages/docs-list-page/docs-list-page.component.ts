import { Component, OnInit } from '@angular/core';
import { DocumentRepositoryService } from "../../services/document-repository.service";
import { PageTitleService } from '../../services/page-title.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDeleteDialogComponent } from '../../dialogs/confirm-delete-dialog/confirm-delete-dialog.component';

@Component({
  selector: 'app-docs-list-page',
  templateUrl: './docs-list-page.component.html',
  styleUrls: ['./docs-list-page.component.scss']
})
export class DocsListPageComponent implements OnInit {

  docs$;

  constructor(
    private readonly pageTitle: PageTitleService,
    private readonly router: Router,
    private readonly docsRepo: DocumentRepositoryService,
    private readonly dialog: MatDialog
  ) { }

  ngOnInit() {
    this.pageTitle.setTitle('Dashboard');
    this.docs$ = this.docsRepo.listAll();
  }

  deleteDoc(doc) {
    const dialogRef = this.dialog.open(ConfirmDeleteDialogComponent, {
      data: {
        item: {
          type: doc.id.split(':')[0],
          name: doc.key
        }
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.docsRepo.deleteDoc(doc.id).subscribe(({ok}) => {
          console.log(`Deleted: ${ ok }`);
          this.docs$ = this.docsRepo.listAll();
        });
      }
    });
  }

  addContent() {
    this.router.navigate(['/import']);
  }
}
