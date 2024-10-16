import { throwError as observableThrowError, Observable } from "rxjs";
import { Injectable } from "@angular/core";
// import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ValidationService {
  static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
    const config = {
      required: "Required field",
      // 'invalidEmailAddress': 'Invalid email address',
      invalidPassword:
        "Invalid password. Password must be at least 6 characters long, and contain a number.",
      minlength: `Min. length ${validatorValue.requiredLength}`,
      badword: "Ilegal word",
      invalid: "Ilegal word",
      pattern: "Invalid entry",
    };

    return config[validatorName];
  }
  static passwordValidator(control) {
    // {6,100}           - Assert password is between 6 and 100 characters
    // (?=.*[0-9])       - Assert a string has at least one number
    if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
      return null;
    } else {
      return { invalidPassword: true };
    }
  }

  constructor(private http: HttpClient) {}

  // checkForDupEmail(email: string): Observable<any> {

  //   // return this.http.post(`${environment.appApi.baseUrl}/accounts/isregisteredemailaddress?emailAddress=${email}`, {email})
  // }
  // private extractRes(response: Response) {
  //   // modify, enhance stuff here
  //   const body = response.json();
  //   return body || '';
  // }

  // private handleError(error: Response): Observable<any> {
  //   // in a real world app, we may send the server to some remote logging infrastructure
  //   // instead of just logging it to the console
  //   console.error(error);
  //   return observableThrowError(error.json().error || 'Server error');
  // }
}
