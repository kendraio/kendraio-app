import { Injectable } from "@angular/core";
import { from, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ClaimsService {
  constructor() {}

  getUnsentClaims(): any {
    return from(JSON.parse(localStorage.getItem("myClaims")));
  }
}
