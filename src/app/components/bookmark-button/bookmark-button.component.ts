import { Component, OnDestroy, OnInit } from '@angular/core';
import { BookmarkDataService } from '../../services/bookmark-data.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-bookmark-button',
  templateUrl: './bookmark-button.component.html',
  styleUrls: ['./bookmark-button.component.scss'],
})
export class BookmarkButtonComponent implements OnInit, OnDestroy {
  isActive = false;
  onDestroy$ = new Subject();

  constructor(private readonly bookmarks: BookmarkDataService) {}

  ngOnInit() {
    this.bookmarks.isActive$
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((isActive) => (this.isActive = isActive));
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  onBookmark() {
    this.bookmarks.onBookmark();
  }
}
