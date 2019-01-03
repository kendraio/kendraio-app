import { Component, OnInit } from '@angular/core';
import { SchemaRepositoryService } from "../../services/schema-repository.service";
import { DocumentRepositoryService } from "../../services/document-repository.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-schema-list-page',
  templateUrl: './schema-list-page.component.html',
  styleUrls: ['./schema-list-page.component.scss']
})
export class SchemaListPageComponent implements OnInit {

  schemas: Array<string> = [];

  constructor(
    private readonly docsRepo: DocumentRepositoryService,
    private readonly schemaRepo: SchemaRepositoryService,
    private readonly router: Router
  ) { }

  ngOnInit() {
    this.schemas = this.schemaRepo.getSchemaList();
  }

  addDoc(schemaName: string) {
    this.docsRepo.addNew(schemaName).subscribe(({ id }) => {
      this.router.navigate(['/docs', id]);
    });
  }

}
