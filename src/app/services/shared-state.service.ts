/**
 * @overview 
 * The state is a shared data store that provides some blocks with asynchronous access to data. 
 * This capability should never modify the data emitted by the block, as this could easily result in infinite loops within out flows. 
 * It can however be used in elements of the UI to present up to date information to the user, or to enable/disable components. 
 * 
 * To add a shared state capabilities to a component, you need to subscribe to updates in the constructor. 
 * 
 * @example
 *   constructor(
 *    private stateService:SharedStateService
 *    ) {
 *        stateService.shared$.subscribe(state => { setTimeout(() =>{this.updateOutputDisplay()}) });
 *       }
 * 
 *  The setTimeout() wrapper allows the updates to work with Angular's change detection cycle. Don't leave it out. 
 */

import { Injectable } from '@angular/core';
import { get, set} from 'lodash-es';
import { Subject } from 'rxjs';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SharedStateService {
  private _state = {}
  
  // set up observable streams to allow for realtime state sharing
  private stateSource = new Subject<any>();
  state$ = this.stateSource.asObservable();
  
  constructor( 
    private location:Location
  ) { }

  /**
   * Returns a processed version if state that has both global and local paths
   */
  public get state(){
    const localPath = this.location.path().substring(1).split("/").join('.'); 
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
    const localPath = this.location.path().substring(1).split("/").join('.'); 
    console.log("p:"+localPath);
    if (key.startsWith("global")) {
      internalKey = key.substring(7); // remove the prefix
    } else {
      if (key.startsWith("local")) {
        internalKey = key.substring(6); // remove the prefix
      }
      if(internalKey.length) { 
        internalKey = [localPath,internalKey].join('.');
      }
      else {
        internalKey = localPath;
      }  
    }
    set(this._state,internalKey,value);    
    // announce the change to any listeners
    this.stateSource.next(this.state);
    return value;
  }

  /**
   * Returns a value from the state 
   * @param key The path to the data to return
   * @returns any
   */
  getValue(key:string):any{
    if (!(key.startsWith("local.") || key.startsWith("global."))){
      // Default to local
      key = "local."+key;
    }
    const state = this.state;  
    const value = get(state,key);
    return value;
  }
}
