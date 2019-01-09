import { Injectable } from '@angular/core';
import { v4 } from 'uuid';
import { from } from 'rxjs';
import { DocumentRepositoryService } from './document-repository.service';
import { switchMap, tap } from 'rxjs/operators';

// NB: This was the temporary in-memory db for dev/testing
// TODO: Finish the in-progress refactoring.
// Replace usage of this db service with the PouchDB-based document repo.


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(
    private readonly docRepo: DocumentRepositoryService
  ) {

  }

  listKeys() {
    return this.docRepo.listAll();
  }

  save(item) {
    if (!item['_id']) {
      return this.docRepo.addNew('Legacy').pipe(
        tap(console.log),
        switchMap(({ id: _id, rev: _rev }: any) => this.docRepo.putDoc({ _id, _rev, '@schema': 'Legacy', ...item }))
      );
    }
    return this.docRepo.putDoc(item);
  }

  get(id: string) {
    return this.docRepo.getDoc(id);
  }

  delete(id: string) {
    return this.docRepo.deleteDoc(id);
  }

}
