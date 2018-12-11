import { Component, OnInit } from '@angular/core';
import { DocumentRepositoryService } from "../../services/document-repository.service";

@Component({
  selector: 'app-docs-list-page',
  templateUrl: './docs-list-page.component.html',
  styleUrls: ['./docs-list-page.component.scss']
})
export class DocsListPageComponent implements OnInit {

  docs$;

  constructor(
    private readonly docsRepo: DocumentRepositoryService
  ) { }

  ngOnInit() {
    this.docs$ = this.docsRepo.listAll();
  }

  deleteDoc(id) {
    this.docsRepo.deleteDoc(id).subscribe(({ ok }) => {
      console.log(`Deleted: ${ok}`);
      this.docs$ = this.docsRepo.listAll();
    });
  }
}
