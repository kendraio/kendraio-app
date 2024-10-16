import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Title } from "@angular/platform-browser";

@Injectable({
  providedIn: "root",
})
export class PageTitleService {
  pageTitle$ = new BehaviorSubject({
    title: "Kendraio App",
    isWorkflow: false,
  });
  refresh$ = new BehaviorSubject({});
  isApp$ = new BehaviorSubject(false);

  constructor(private titleService: Title) {}

  setTitle(newTitle: string, isWorkflow = false) {
    this.pageTitle$.next({ title: newTitle, isWorkflow });
    this.titleService.setTitle("Kendraio | " + newTitle);
  }

  onRefresh() {
    this.refresh$.next({});
  }

  enableAppLayout() {
    this.isApp$.next(true);
  }

  disableAppLayout() {
    this.isApp$.next(false);
  }
}
