import { Component, OnInit } from '@angular/core';
import { DocumentRepositoryService } from "../../services/document-repository.service";
import { ActivatedRoute, Router } from "@angular/router";
import { map, switchMap } from "rxjs/operators";

@Component({
  selector: 'app-doc-edit-page',
  templateUrl: './doc-edit-page.component.html',
  styleUrls: ['./doc-edit-page.component.scss']
})
export class DocEditPageComponent implements OnInit {

  doc$;

  constructor(
    private readonly docsRepo: DocumentRepositoryService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) { }

  ngOnInit() {
    this.doc$ = this.route.paramMap.pipe(
      map(params => params.get('id')),
      switchMap(id => this.docsRepo.getDoc(id))
    );
  }

  onDocSaved() {
    this.router.navigate(['/docs']);
  }

  onCancelled() {
    this.router.navigate(['/docs']);
  }
}
