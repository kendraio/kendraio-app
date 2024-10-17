import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DocumentRepositoryService } from './document-repository.service';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ReferenceFieldService {
  constructor(private readonly docs: DocumentRepositoryService) {}

  getReferenceValues(type) {
    // return new BehaviorSubject([type, 'other', 'test']);
    return this.docs.listAllOfType(type).pipe(
      // tap(console.log),
      map((docs) => docs.map((item) => item['@label']))
    );
  }
}
