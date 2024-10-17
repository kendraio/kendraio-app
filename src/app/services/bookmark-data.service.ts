import { Injectable } from '@angular/core';
import { WorkflowService } from './workflow.service';
import { BehaviorSubject } from 'rxjs';
import { filter, find, remove } from 'lodash-es';

@Injectable({
  providedIn: 'root',
})
export class BookmarkDataService {
  activeBookmarks = [];

  isActive$ = new BehaviorSubject(false);

  constructor(private readonly workflows: WorkflowService) {
    this.activeBookmarks = this.loadSavedBookmarks();
    this.setIsActive();
  }

  setIsActive() {
    const adapterName = this.workflows.getAdapterName();
    const workflowId = this.workflows.id;
    this.isActive$.next(this.hasBookmark(adapterName, workflowId));
  }

  loadSavedBookmarks() {
    const data = localStorage.getItem('kendraio-app-saved-bookmarks');
    if (data) {
      return JSON.parse(data);
    }
    return [];
  }

  saveBookmarks() {
    const value = JSON.stringify(this.activeBookmarks);
    localStorage.setItem('kendraio-app-saved-bookmarks', value);
    console.log('save', value);
  }

  hasBookmark(adapterName, workflowId) {
    return find(
      this.activeBookmarks,
      (item) =>
        item.adapterName === adapterName && item.workflows === workflowId
    );
  }

  addBookmark(adapterName, workflowId) {
    console.log('add bookmark');
    this.activeBookmarks.push({ adapterName, workflowId, active: true });
    this.saveBookmarks();
    this.setIsActive();
  }

  removeBookmark(adapterName, workflowId) {
    console.log('remove bookmark');
    this.activeBookmarks = filter(
      this.activeBookmarks,
      (item) =>
        !(item.adapterName === adapterName && item.workflowId === workflowId)
    );
    this.saveBookmarks();
    this.setIsActive();
  }

  onBookmark() {
    const adapterName = this.workflows.getAdapterName();
    const workflowId = this.workflows.id;
    console.log('toggle bookmark', adapterName, workflowId);
    if (!adapterName || !workflowId) {
      return;
    }
    if (this.hasBookmark(adapterName, workflowId)) {
      this.removeBookmark(adapterName, workflowId);
    } else {
      this.addBookmark(adapterName, workflowId);
    }
    console.log(this.activeBookmarks);
  }
}
