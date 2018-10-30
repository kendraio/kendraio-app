import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageTitleService {

  pageTitle$ = new BehaviorSubject('Kendraio App');

  constructor() { }

  setTitle(title: string) {
    this.pageTitle$.next(title);
  }
}
