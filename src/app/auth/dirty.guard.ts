import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

/** @fileoverview
 * When a kendra flow has been changed, we want to warn the user that they may lose their changes if they 
 * navigate away from the page.
 * 
 * A CanDeactivate guard is assigned in the app-workflow to run on navigation.
 * To implement the guard on a component, implement the CanDeactivate interface.
 */


/**
 * Implement this interface in a component if you want to ask for confirmation before navigating away
 */
export interface CanComponentDeactivate {
 canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable({
  providedIn: 'root',
})
export class CanDeactivateGuard  {
  canDeactivate(component: CanComponentDeactivate) {
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}