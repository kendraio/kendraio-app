import { Injectable } from '@angular/core';
import {clone, get, set} from 'lodash-es';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedContextService {
  _context = {}
  
  private sharedSource = new Subject<any>();
  // Observable string streams
  shared$ = this.sharedSource.asObservable();

  constructor() { }

  setValue(key:string, value:any):any {
    set(this._context,key,value);
    // announce the change to any listeners
    this.sharedSource.next(this._context);
    return value;
  }

  getValue(key:string):any{
    const value = get(this._context,key);
    return value;
  }
}
