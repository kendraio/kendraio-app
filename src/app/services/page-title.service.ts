import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class PageTitleService {

  pageTitle$ = new BehaviorSubject('Kendraio App');

  constructor(
    private titleService: Title
  ) { }

  setTitle(newTitle: string) {
    this.pageTitle$.next(newTitle);
    this.titleService.setTitle('Kendraio ' +  newTitle );
  }
}

