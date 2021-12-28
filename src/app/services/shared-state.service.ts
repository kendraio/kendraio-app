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
import internal from 'stream';


export const STATE_ROOT_GLOBAL = 'global';
export const STATE_ROOT_LOCAL = 'local';


export const STATE_ROOT_FLAGS = 'flags'; // What top level key should contain flags
export const STATE_ROOT_FLAGS_SOURCE = 'global._.flags'; // how should the top level flags key be translated in the global tree

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
   * Returns a processed version if state that has both global and local paths. 
   * 
   * "global" contains the entire state tree, and is the root. 
   * "local" contains a specific slice of the tree for the current location
   * "flags" is a shortcut to the flags storage location
   */
  public get state(){    
    let state = {
      global : this._state,
      local : get(this._state,this.localPath)
    }
    state[STATE_ROOT_FLAGS] =get(this._state,STATE_ROOT_FLAGS_SOURCE.substring(7));
    return state;
  }
  /**
   * returns a version of the current url path to an addressable  nested data path
   * Eg: e.g from: /adapterName/workflowId to adapterName.workflowId 
   */
  private get localPath():string{
    return this.location.path().substring(1).replace("/\/+/g,",'.');     
  }
  
  /**
   * 
   * @param key Set a value to the internal state
   * @param value path. 
   * @returns Value that was set
   */
  setValue(key:string, value:any):any {
    let internalKey = key;        
    // if we are using the flags shortcut, swap it for the full path
    if (key.startsWith(STATE_ROOT_FLAGS)) {
      key = key.replace(STATE_ROOT_FLAGS,STATE_ROOT_FLAGS_SOURCE);      
    }
    if (key.startsWith(STATE_ROOT_GLOBAL)) {
      internalKey = key.substring(7); // remove the prefix
    } else {
      if (key.startsWith(STATE_ROOT_LOCAL)) {
        internalKey = key.substring(6); // remove the prefix
      }
      if(internalKey.length) { 
        internalKey = [this.localPath,internalKey].join('.');
      }
      else {
        internalKey = this.localPath;
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
    // if we are using the flags shortcut, swap it for the full path
    if (key.startsWith(STATE_ROOT_FLAGS)) {
      key=key.replace(STATE_ROOT_FLAGS,STATE_ROOT_FLAGS_SOURCE);
    }
    if (!(key.startsWith(STATE_ROOT_LOCAL) || key.startsWith(STATE_ROOT_GLOBAL))){
      // Default to local
      key = STATE_ROOT_LOCAL+"."+key;
    }    
    const value = get(this.state,key);
    return value;
  }
}
