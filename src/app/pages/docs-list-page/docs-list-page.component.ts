import { Component, OnInit } from '@angular/core';
import { DocumentRepositoryService } from "../../services/document-repository.service";
import { PageTitleService } from '../../services/page-title.service';
import { Router } from '@angular/router';

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
    private readonly docsRepo: DocumentRepositoryService
  ) { }

  ngOnInit() {
    this.pageTitle.setTitle('Dashboard');
    this.docs$ = this.docsRepo.listAll();
  }

  deleteDoc(id) {
    this.docsRepo.deleteDoc(id).subscribe(({ ok }) => {
      console.log(`Deleted: ${ok}`);
      this.docs$ = this.docsRepo.listAll();
    });
  }

  addContent() {
    this.router.navigate(['/import']);
  }
}
