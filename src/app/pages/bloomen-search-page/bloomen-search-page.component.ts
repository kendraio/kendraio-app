import { Component, OnDestroy, OnInit } from "@angular/core";
import { UntypedFormControl } from "@angular/forms";
import { from, of, Subject } from "rxjs";
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  map,
  switchMap,
  takeUntil,
} from "rxjs/operators";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-bloomen-search-page",
  templateUrl: "./bloomen-search-page.component.html",
  styleUrls: ["./bloomen-search-page.component.scss"],
})
export class BloomenSearchPageComponent implements OnInit, OnDestroy {
  destroy$ = new Subject();
  bloomenAuth = "";
  searchControl = new UntypedFormControl();
  errorMessage = "";

  url = "https://bloomen.herokuapp.com/photos/search/";

  results = [];

  constructor(private readonly http: HttpClient) {}

  ngOnInit() {
    const profile = JSON.parse(localStorage.getItem("kendraio-user-profile"));
    console.log({ profile });
    if (profile && profile.bloomenAuth && profile.bloomenAuth.length > 0) {
      this.bloomenAuth = profile.bloomenAuth;
    }
    this.searchControl.valueChanges
      .pipe(
        takeUntil(this.destroy$),
        debounceTime(500),
        map((value: string) => value.trim()),
        distinctUntilChanged(),
        switchMap((term) =>
          this.http.post(
            this.url,
            { term },
            {
              headers: {
                authorization: `Bearer ${this.bloomenAuth}`,
              },
            },
          ),
        ),
        catchError((error) => {
          this.errorMessage = error.message;
          return from([]);
        }),
      )
      .subscribe((_results) => (this.results = _results));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
