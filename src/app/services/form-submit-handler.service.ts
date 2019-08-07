import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface FormSubmitAction {
  form: string;
  action: string;
  payload: any;
}

@Injectable({
  providedIn: 'root'
})
export class FormSubmitHandlerService {

  private _actions$ = new BehaviorSubject<FormSubmitAction>(null);
  actions$ = this._actions$.asObservable();

  constructor() { }

  handle(action: FormSubmitAction) {
    console.log('Handle Form Action', { action });
    this._actions$.next(action);
  }

}
