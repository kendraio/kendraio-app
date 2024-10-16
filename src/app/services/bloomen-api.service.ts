import { Injectable } from "@angular/core";
import { map, tap } from "rxjs/operators";
import { omit } from "lodash-es";
import { HttpClient } from "@angular/common/http";

const BLOOMEN_URL = "https://bloomen.herokuapp.com"; // no trailing slash

@Injectable({
  providedIn: "root",
})
export class BloomenApiService {
  keys = {
    Publisher:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9." +
      "eyJ1c2VyIjp7InJvbGUiOiJwdWJsaXNoZXIiLCJyZXB1dGF0aW9uIjp7InBvc2l0aXZlI" +
      "jowLCJuZWdhdGl2ZSI6MH0sInNldHRpbmdzIjp7ImF0dHJpYnV0aW9uIjp0cnVlfSwia3l" +
      "jIjp7ImFkZHJlc3MiOiIiLCJwaG9uZSI6IiIsImZpcnN0bmFtZSI6IiIsImxhc3RuYW1lIj" +
      "oiIiwiaWQxIjoiIiwiaWQyIjoiIiwic3RhdHVzIjowLCJyZXZpZXdlZEJ5IjoiIn0sIl9pZC" +
      "I6IjViYjQ5MDI5NGRkN2ExMmNhYzQxYTU3NSIsInVzZXJuYW1lIjoicHVibGlzaGVyIiwiaGF" +
      "zaCI6IjUyYWRlZDE2NTM2MDM1MmEwZjU4NTc1NzFkOTZkNjhmIiwiZW1haWwiOiJwdWJsaXNoZ" +
      "XJAYXRjLmdyIiwib3JnYW5pc2F0aW9uIjoiQVRDIiwiY3JlYXRlZEF0VVRDIjoiMjAxOC0xMC0w" +
      "M1QwOTo0NzoyMS4zMDlaIiwiX192IjowLCJvcmciOm51bGwsImlkIjoiNWJiNDkwMjk0ZGQ3YTEy" +
      "Y2FjNDFhNTc1In0sImlhdCI6MTU1MDU4MTk0Nn0.jxCWK2avRtvmuh0rdeg8z0iu1sG4JaBfkI_gZDNx1Co",
    Photographer:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9." +
      "eyJ1c2VyIjp7InJvbGUiOiJwaG90b2dyYXBoZXIiLCJyZXB1dGF0aW9uIjp7InBvc2l0aX" +
      "ZlIjo3LCJuZWdhdGl2ZSI6MH0sInNldHRpbmdzIjp7ImF0dHJpYnV0aW9uIjp0cnVlfSwia" +
      "3ljIjp7ImFkZHJlc3MiOiIiLCJwaG9uZSI6IiIsImZpcnN0bmFtZSI6IiIsImxhc3RuYW1lI" +
      "joiIiwiaWQxIjoiIiwiaWQyIjoiIiwic3RhdHVzIjowLCJyZXZpZXdlZEJ5IjoiIn0sIl9pZC" +
      "I6IjViYjM1ZmE2ZWIwNDMxMWE1YzYwNjA0MCIsInVzZXJuYW1lIjoicGhvdG9ncmFwaGVyIiwi" +
      "aGFzaCI6ImFiNWIwMzgxN2NhYTAxYzRhMmEwZWFkY2ZlNjQ4NjljIiwiZW1haWwiOiJwaG90b2d" +
      "yYXBoZXJAdGVzdC5jb20iLCJvcmdhbmlzYXRpb24iOiJwaG90b2dyYXBoZXIiLCJjcmVhdGVkQXR" +
      "VVEMiOiIyMDE4LTEwLTAyVDEyOjA4OjA2LjEyMloiLCJfX3YiOjB9LCJpYXQiOjE1NTA1MDM2NTR9" +
      ".LThaEsPkrDkvlvKMw276PHlEsl430yNDAPATFi9sNw8",
  };
  activeUser = "Publisher";

  constructor(private readonly http: HttpClient) {}

  getUsers() {
    return this.http
      .get(`${BLOOMEN_URL}/users/kyc`, {
        headers: { Authorization: `Bearer ${this.keys[this.activeUser]}` },
      })
      .pipe(
        tap(console.log),
        map((users) => users.map((user) => omit(user, ["__v", "_id"]))),
      );
  }
}
