import { Injectable } from '@angular/core';
import {clone, get, set} from 'lodash-es';
import { Subject } from 'rxjs';
import internal from 'stream';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SharedStateService {
  private _state = {}
  
  private sharedSource = new Subject<any>();
  // Observable string streams
  shared$ = this.sharedSource.asObservable();
  
  constructor( 
    private location:Location
  ) { }

  /**
   * Returns a processed version if state that has both global and local paths
   */
  public get state(){
    const localPath = location.pathname.substr(1).split("/").join('.'); 
    const state = {
      global : this._state,
      local : get(this._state,localPath)
    }
    return state;
  }

  /**
   * 
   * @param key Set a value to the internal state
   * @param value path. 
   * @returns Value that was set
   */
  setValue(key:string, value:any):any {
    let internalKey = key;
    console.log(location);
    const localPath = location.pathname.substr(1).split("/").join('.'); 
    if (key.startsWith("global")) {
      internalKey = key.substr(7); // remove the prefix
    } else {
      if (key.startsWith("local")) {
        internalKey = key.substr(6); // remove the prefix
      }
      internalKey = [localPath,internalKey].join('.');
    }
    set(this._state,internalKey,value);
    console.log("Internal key:"+internalKey);
    // announce the change to any listeners
    this.sharedSource.next(this.state);
    return value;
  }

  getValue(key:string):any{
    if (!key.startsWith("local.") || !key.startsWith("global.")){
      key = "local."+key;
    }
    const state = this.state;
    const value = get(state,key);
    return value;
  }
}
